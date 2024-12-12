import React from 'react';
import './Profile.css'; 
import Footer from "../components/Footer/Footer"

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="row">
        {/* Left Menu Section */}
        <div className="col-md-2 profile-menu">
          <h5>Manage My Account</h5>
          <ul>
            <li className="active">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h5>My Orders</h5>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h5>My Wishlist</h5>
        </div>

        {/* Right Profile Editing Section */}
        <div className="col-md-8 profile-edit">
          <h4>Edit Your Profile</h4>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="Enter Your First Name" required />
              </div>
              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Enter Your Last Name" required />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
            </div>
            <h5>Password Changes</h5>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Current Password"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label>New Password</label>
                <input type="password" className="form-control" placeholder="New Password" required />
              </div>
              <div className="form-group col-md-6">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm New Password"
                  required
                />
              </div>
            </div>
            <div className="profile-actions">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Profile;
