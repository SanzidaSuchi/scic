import React, { useEffect, useState } from "react";
import {  Route, Link, Routes } from "react-router-dom";

import "./Dashboard.css";
import AddServices from "../AddServices/AddServices";
import Review from "../Review/Review";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import useFirebase from "../../../hooks/useFirebase";
import MyOrder from "../MyOrder/MyOrder";
import ManageAllOrder from "./../DashboardHome/ManageAllOrder";
import Pay from "../Pay/Pay";
import ManageProduct from "../ManageProduct/ManageProduct";

const Dashbaord = () => {
  // let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>DashBoard</h5>
              <Link to={`/dashboard`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to={`/dashboard/myOrder`}>
                <li className="dashboard-menu mt-5">My Order list</li>
              </Link>

              <Link to={`/dashboard/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <Link to={`/dashboard/pay`}>
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>
                    <div className="admin-dashboard">
                    {isAdmi && (
                    <Link to={`/dashboard/addService`}>
                    <li className="dashboard-menu">Add NewProduct</li>
                </Link>
                )}
                {isAdmi && (
                <Link to={`/dashboard/makeAdmin`}>
                <li className="dashboard-menu">Make Admin</li>
                </Link>

                )}
                {isAdmi && (
        
                <Link to={`/dashboard/manageAllOrder`}>
                <li className="dashboard-menu">Manage All</li>
                </Link>
                        )}
                {isAdmi && (
        
                <Link to={`/dashboard/manageProduct`}>
                <li className="dashboard-menu">Manage Product</li>
                </Link>
                        )}
                    </div>
            </div>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route exact path={`/dashboard/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`/dashboard/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`/dashboard/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`/dashboard/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`/dashboard/manageAllOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`/dashboard/pay`}>
               <Pay></Pay>
              </Route>
              <Route exact path={`/dashboard/manageProduct`}>
               <ManageProduct></ManageProduct>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;








