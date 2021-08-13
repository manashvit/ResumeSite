import { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { getMembers, deleteData } from '../store/geekSlice';
import GeekTable from './table'
import './geek.css';

const filterData = (data, input) => {
  if (input.length === 0) return data;
  return data.filter((item) => JSON.stringify(item).toLowerCase().indexOf(input.toLowerCase()) > -1)
}


function Geektest() {
  const { loadMsg, data } = useSelector(state => state.geekData);
  const dispatch = useDispatch();
  const [activePage, changeActive] = useState(0)
  const [filteredTable, changeFilteredTable] = useState([])
  const [searchTxt, changeSearchTxt] = useState('')
  const [checkStatus, changeCheckStatus] = useState({ all: "no", checkArr: [] })

  let searchedData = filterData(data, searchTxt)

  const loadTableData = (state, { type, payload }) => {
    switch (type) {
      case 'Done':
        changeActive(0)
        return payload.filter((item, index) => index < 10)
      case 'Updated':
      case 'Deleted':
        return payload.filter((item, index) => index >= ((activePage) * 10) && index < ((activePage + 1) * 10))
      case 'goToPage':
        changeActive(payload - 1)
        return filteredTable.filter((item, index) => index >= ((payload - 1) * 10) && index < (payload * 10))
    }
  }

  let [tableData, dispatchData] = useReducer(loadTableData, [])

  useEffect(() => {
    switch (loadMsg) {
      case 'Init': return dispatch(getMembers());
      default:
        let finalData = [...data]
        if (searchTxt.length) finalData = searchedData

        changeFilteredTable(finalData)
        return dispatchData({ type: loadMsg, payload: finalData })
    }
  }, [data])

  useEffect(() => {
    if (loadMsg === 'Init') return;
    changeFilteredTable(searchedData)
    dispatchData({ type: 'Done', payload: searchedData })
  }, [searchTxt])

  return (
    <div className="geekDiv">
      <div className='searchBox'>
        Geek Test
        <button disabled={checkStatus.checkArr.length === 0} onClick={() => dispatch(deleteData(checkStatus.checkArr))}>Delete Selected</button>
        <input type="text" placeholder="Global Search" value={searchTxt} onChange={(e) => changeSearchTxt(e.target.value)} />
        <FaSearch />
      </div>
      {loadMsg === 'Init' ?
        <div className="loader"> Loading</div> :
        <>
          <GeekTable tableData={tableData} checkStatus={checkStatus} changeCheckStatus={changeCheckStatus} />
          <ul className='pageList'>
            <li className={activePage === 0 ? "disabled" : ""}
              onClick={() => dispatchData({ type: 'goToPage', payload: activePage })}>
              <FaChevronLeft />
            </li>

            {[...Array(Math.ceil(filteredTable.length / 10))].map((key, index) =>
              <li className={activePage === index ? "active" : ""} key={index}
                onClick={() => dispatchData({ type: 'goToPage', payload: index + 1 })} >
                {index + 1}
              </li>)}

            <li className={activePage === (Math.floor(filteredTable.length / 10)) ? "disabled" : ""}
              onClick={() => dispatchData({ type: 'goToPage', payload: activePage + 2 })}>
              <FaChevronRight />
            </li>
          </ul>
        </>
      }
    </div>
  );
}


export default Geektest;
