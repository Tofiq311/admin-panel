import { useState, useEffect } from 'react'
import "./Datatable.scss"
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../Datatablesource.jsx";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../Firebase";


  const Datatable = () => {
 
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(
          collection(db, "users"),
          (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
          },
          (error) => {
            console.log(error);
          }
        );
    
        return () => {
          unsub();
        };
      }, []);
    
      const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "users", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };
    

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
               <Link to="/users/view" style={{ textDecoration: "none" }}> 
                  <div className="viewButton">View</div>
               </Link> 
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)} >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];



  return (
    <div className="datatable">
        <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
        </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
