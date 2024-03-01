import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center flex-wrap bg-[#0b1120] min-h-screen py-10">
      <form onSubmit={submitHandler} className="text-white outline-none">
        <label htmlFor="firstName" className="text-lg text-white">
          First name
        </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ravi"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <label htmlFor="lastName">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Mishra"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="mitianravimishra@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Sahnewal"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Ludhiana"
          value={formData.city}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Punjab"
          value={formData.state}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="141120"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline-none bg-gray-800 w-full text-white py-2 px-3 rounded-md mb-4"
        />

        <br />
        <br />
        <fieldset className="border border-white rounded-md p-4 mt-4">
          <legend className="text-lg text-white mb-2">By Email</legend>

          <div className="flex items-center mb-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="comments" className="text-white">Comments</label>
              <p className="text-gray-400 ml-4">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div  className="flex items-center mb-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="candidates" className="text-white">Candidates</label>
              <p className="text-gray-400 ml-4">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="offers" className="text-white">Offers</label>
              <p className="text-gray-400 ml-4">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br />
        <br />
        <fieldset className="border border-white rounded-md p-4">
          <legend className="text-lg text-white mb-2">Push Notifications</legend>
          <p className="text-gray-400">These are delivered via SMS to your mobile phone.</p>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything" className="text-white">Everything</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail" className="text-white">Same as email</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing" className="text-white">No Push Notifications</label>
          </div>
        </fieldset>

        <button className=" bg-green-500 text-white font-bold rounded py-3 px-6 mt-4 w-full">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
