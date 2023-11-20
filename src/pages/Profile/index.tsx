import React, { useEffect, useState } from "react"

import PhoneInput from "react-phone-input-2"
import { Country, State, City } from "country-state-city"
import "react-phone-input-2/lib/style.css"

import IconList from "@/components/Icon"
import "./style.css"

const Profile = () => {
  const [tab, setTab] = useState("profile")
  const handleTab = (list: string) => {
    setTab(list)
  }
  const [telPhone, setTelPhone] = useState("")
  const [countries, setCountries]: any = useState()
  const [cities, setCities] = useState()
  const [states, setStates] = useState()

  const [modify, setModify] = useState(false)

  const handleCountry = async (data: string) => {
    const city: any = City.getCitiesOfCountry(data)
    setCities(city)
  }

  const handleCities = async (country: string, state: string) => {
    const data: any = State.getStateByCodeAndCountry(state, country)
    setStates(data)
  }

  const handlePhone = (phone: any) => {
    setTelPhone(phone)
  }
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const country = Country.getAllCountries()
        setCountries(country)
      } catch (err) {
        console.log(err)
      }
    }
    getAllCountries()
  }, [])

  return (
    <>
      <div>
        <div className="tab">
          <div
            className="list"
            onClick={() => handleTab("profile")}
            style={
              tab === "profile"
                ? {
                    color: "#f4c73e",
                    borderRadius: "1px",
                    borderBottom: "4px solid",
                    borderBottomColor: "#f4c73e",
                  }
                : {}
            }
          >
            {IconList.humanIcon}Profile
          </div>
          <div
            className="list"
            onClick={() => handleTab("setting")}
            style={
              tab === "setting"
                ? {
                    color: "#f4c73e",
                    borderRadius: "1px",
                    borderBottom: "4px solid",
                    borderBottomColor: "#f4c73e",
                  }
                : {}
            }
          >
            {IconList.settingIcon}Setting
          </div>
        </div>
        <div
          className="card"
          style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
        >
          {tab === "profile" ? (
            <>
              <div className="card-content" style={{ padding: "10px 30px 30px 30px" }}>
                {/* <h1
                  style={{ lineHeight: "10px", display: "flex", alignItems: "center", gap: "4px" }}
                >
                  {IconList.humanIcon}Profile
                </h1> */}
                <label htmlFor="photo" style={{ width: "fit-content" }}>
                  <img src="/photo.jpg" style={{ userSelect: "none" }} />
                </label>
                <input id="photo" type="file" hidden />
                <div className="inputContainer">
                  <label className="label" htmlFor="name">
                    {IconList.personProfileIcon}Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value="Jacob Kevin"
                    placeholder=" "
                    disabled={modify ? false : true}
                  />
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="email">
                    {IconList.emailIcon}Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={"john@gmail.com"}
                    placeholder=" "
                    disabled={modify ? false : true}
                  />
                </div>
                <div className="row-2">
                  <div className="inputContainer">
                    <label className="label" htmlFor="country">
                      {IconList.phoneIcon}Country
                    </label>
                    <select
                      id="country"
                      onChange={(e) => handleCountry(e.target.value)}
                      disabled={modify ? false : true}
                    >
                      {countries?.map((item: any, index: any) => {
                        return (
                          <option key={index} value={item?.isoCode}>
                            {item?.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="inputContainer">
                    <label className="label" htmlFor="states">
                      {IconList.phoneIcon}State
                    </label>
                    <select
                      id="states"
                      disabled={modify ? false : true}
                      onChange={(e) =>
                        handleCities(
                          e.target.options[e.target.selectedIndex].dataset.country,
                          e.target.options[e.target.selectedIndex].dataset.state
                        )
                      }
                    >
                      {cities &&
                        cities.map((item: any, index: any) => {
                          return (
                            <option
                              key={index}
                              data-country={item?.countryCode}
                              data-state={item?.stateCode}
                              value={item?.name}
                            >
                              {item?.name}
                            </option>
                          )
                        })}
                    </select>
                  </div>
                </div>
                <div className="row-2">
                  <div className="inputContainer">
                    <label className="label" htmlFor="state">
                      {IconList.personProfileIcon}State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      placeholder=" "
                      value={states ? states.name : ""}
                      disabled={modify ? false : true}
                    />
                  </div>
                  <div className="inputContainer">
                    <label className="label" htmlFor="phone">
                      {IconList.phoneIcon}PhoneNumber
                    </label>
                    <PhoneInput
                      country={"us"}
                      value={telPhone}
                      onChange={(event) => handlePhone(event)}
                      inputStyle={{ width: "100%", marginTop: "4px !important" }}
                      disabled={modify ? false : true}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                  {modify ? (
                    <>
                      <button style={{ fontSize: "14px" }}>{IconList.saveIcon}Save</button>
                      <button
                        onClick={() => setModify(false)}
                        style={{ fontSize: "14px", background: "#f34646" }}
                      >
                        {IconList.cancelIcon}Cancel
                      </button>
                    </>
                  ) : (
                    <button style={{ fontSize: "14px" }} onClick={() => setModify(true)}>
                      {IconList.saveIcon}Edit
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="card-content" style={{ padding: "10px 30px 30px 30px" }}>
              <h1 style={{ lineHeight: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
                Change Password
              </h1>
              <div className="inputContainer">
                <label className="label" htmlFor="old_pass">
                  {IconList.keyIcon}Old Password
                </label>
                <input type="password" id="old_pass" placeholder="" />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="new_pass">
                  {IconList.keyIcon}New Password
                </label>
                <input type="password" id="new_pass" placeholder="" />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="confirm_pass">
                  {IconList.keyIcon}Confirm Password
                </label>
                <input type="password" id="confirm_pass" placeholder="" />
              </div>
              <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                <button style={{ fontSize: "14px" }}>{IconList.saveIcon}Save</button>
                <button style={{ fontSize: "14px", background: "#f34646" }}>
                  {IconList.cancelIcon}Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Profile
