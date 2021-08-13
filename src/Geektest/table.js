import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { FaEdit, FaTrashAlt, FaRegWindowClose, FaCheckSquare } from 'react-icons/fa';
import { updateData, deleteData } from '../store/geekSlice'
function Table({ tableData, checkStatus, changeCheckStatus }) {
    const [editVal, changeEditVal] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
        changeCheckStatus({ all: "no", checkArr: [] })
    }, [tableData])

    return <div className="geekTableWrap">
        <table>
            <thead>
                <tr>
                    <th width="10%"><input type="checkbox" checked={checkStatus.all === "yes"} onChange={(e) => {
                        changeCheckStatus({
                            all: checkStatus.all === "yes" ? "no" : "yes",
                            checkArr: checkStatus.all === "yes" ? [] : tableData.map((item) => item.id)
                        })
                        changeEditVal({})
                    }} /></th>
                    <th width="25%">Name</th>
                    <th width="35%">Email</th>
                    <th width="20%">Role</th>
                    <th width="10%">Action</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item) =>
                    editVal.id === item.id ?
                        <tr key={item.id}>
                            <td></td>
                            <td><input type="text" value={editVal.name} onChange={(e) => changeEditVal({ ...editVal, name: e.target.value })} /></td>
                            <td><input type="text" value={editVal.email} onChange={(e) => changeEditVal({ ...editVal, email: e.target.value })} /></td>
                            <td><input type="text" value={editVal.role} onChange={(e) => changeEditVal({ ...editVal, role: e.target.value })} /></td>
                            <td>
                                <FaRegWindowClose onClick={() => changeEditVal({})} />
                                <FaCheckSquare onClick={() => {
                                    dispatch(updateData(editVal))
                                    changeEditVal({})
                                }} />
                            </td>
                        </tr> :
                        <tr key={item.id} className={checkStatus.checkArr.indexOf(item.id) > -1?'active':''}>
                            <td><input type="checkbox" checked={checkStatus.checkArr.indexOf(item.id) > -1}
                                onChange={() => {
                                    changeEditVal({})
                                    changeCheckStatus({
                                        all: "no",
                                        checkArr: getCheckedVal(checkStatus.checkArr, item.id)
                                    })
                                }} /></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <FaEdit onClick={() => changeEditVal(item)} />
                                <FaTrashAlt color='brown' onClick={() => dispatch(deleteData([item.id]))} />
                            </td>
                        </tr>)}
            </tbody>
        </table>
    </div>

}

const getCheckedVal = (checkArr, id) => {
    let newArr = [...checkArr], foundIndex = newArr.indexOf(id)
    if (foundIndex > -1) newArr.splice(foundIndex, 1)
    else newArr.push(id)
    return newArr
}
export default Table;
