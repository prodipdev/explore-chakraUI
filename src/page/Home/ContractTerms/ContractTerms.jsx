import { FaPen, FaQuestionCircle } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";
import { GiPriceTag } from "react-icons/gi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setContractTerms } from "../../../redux/features/jobOfferSlice";

const ContractTerms = () => {
  const [formData, setFormData] = useState({
    isFixedPay: false,
    payByTheHour: "",
    scheduleRateIncrease: {
      frequency: "",
      percent: "",
    },
    weeklyLimit: "40",
    allowManualTime: false,
    startDate: "",
  });

  // update form data and dispatch to Redux
  const dispatch = useDispatch();
  const handleFormDataChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
    console.log(formData);
    dispatch(setContractTerms({ ...formData, [key]: value }));
  };

  const activeRadio = (
    <div className="h-5 w-5 rounded-full border-4 border-green-500 bg-green-500 relative">
      <div className="absolute top-0 left-0 border-2 h-full w-full rounded-full"></div>
    </div>
  );
  return (
    <div className="border border-gray-300 rounded-lg mt-10 p-5">
      <h4 className="text-xl font-bold">Contract Terms</h4>
      <p className="mt-4 font-semibold">
        <span className="text-green-500">Upwork Payment Protection.</span> Only
        pey for the work you
      </p>
      <div className="mt-3">
        <h5 className="font-bold flex items-center gap-1">
          Payment Option <FaQuestionCircle className="cursor-pointer" />
        </h5>
        <div className="flex gap-10 mt-1">
          <div
            className={`border-2  rounded-md p-2 cursor-pointer ${
              formData.isFixedPay ? "" : "border-green-500 bg-green-50"
            }`}
            onClick={() => handleFormDataChange("isFixedPay", false)}
          >
            <div className="flex justify-between">
              <small className="whitespace-nowrap bg-white text-sm border border-blue-500 rounded-full w-fit px-2">
                Popular
              </small>
              {formData.isFixedPay ? (
                <div className="h-5 w-5 rounded-full border-2 border-gray-400  relative"></div>
              ) : (
                activeRadio
              )}
            </div>
            <div className="mb-2 mt-1">
              <IoIosAlarm className="text-2xl" />
            </div>
            <p className="text-2xl font-semibold">Pay by the hour</p>
            <p className="text-gray-500 text-sm">
              Pay for the number of hours worked on a project
            </p>
          </div>
          <div
            className={`border-2  rounded-md p-2 cursor-pointer ${
              formData.isFixedPay ? "border-green-500 bg-green-50" : ""
            }`}
            onClick={() => handleFormDataChange("isFixedPay", true)}
          >
            <div className="flex justify-end">
              {formData.isFixedPay ? (
                activeRadio
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-gray-400  relative"></div>
              )}
            </div>
            <div className="mb-2 mt-1">
              <GiPriceTag className="text-2xl" />
            </div>
            <p className="text-2xl font-semibold">Pay a fixed price</p>
            <p className="text-gray-500">
              Pay as project milestones are completed
            </p>
          </div>
        </div>
        <div className="mt-3">
          <h5 className="font-bold flex items-center gap-1">Pay by the hour</h5>
          <div className="font-semibold mt-1">
            <input
              type="number"
              className="border-2 rounded-md px-3 py-1 outline-gray-500"
              placeholder="$9.00"
              value={formData.payByTheHour}
              onChange={(e) =>
                handleFormDataChange("payByTheHour", e.target.value)
              }
            />
            /hr
          </div>
          <p className="text-sm text-gray-600 font-semibold mt-2">
            Prodip K.&apos;s profile rate is $9.00/hr{" "}
          </p>
        </div>
        <div className="mt-4">
          <h5 className="font-bold flex items-center gap-1">
            Schedule a rate increase
          </h5>
          <p className="my-2 text-gray-600">
            Set an optional rate increase for Prodip in your contract&apos;s
            terms. Their rate will increase automatically and can not be changed
            if they accept your offer.
          </p>
          <div className="grid gap-2">
            <select
              name=""
              id=""
              className="border-2 p-1 rounded-lg w-72"
              onChange={(e) =>
                handleFormDataChange("scheduleRateIncrease", {
                  ...formData.scheduleRateIncrease,
                  frequency: e.target.value,
                })
              }
            >
              <option value="0" disabled>
                Select a frequency
              </option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <select
              name=""
              id=""
              className="border-2 p-1 rounded-lg w-72"
              onChange={(e) =>
                handleFormDataChange("scheduleRateIncrease", {
                  ...formData.scheduleRateIncrease,
                  percent: e.target.value,
                })
              }
            >
              <option value="0" disabled>
                Select a percent
              </option>
              <option value="5">5%</option>
              <option value="10">10%</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="font-bold flex items-center gap-1">
            Weekly Limit <FaQuestionCircle className="cursor-pointer" />
          </h5>
          <p className=" text-gray-600">
            Setting a weekly limit is great way to help ensure you stay on
            budget
          </p>
        </div>
        <div className="mt-3">
          <h5 className="font-bold flex items-center gap-1">
            40 hrs/week <FaPen className="cursor-pointer" />
          </h5>
          <p className="mt-1 text-gray-600">$399.60 max/week</p>
        </div>
        <div className="flex gap-1 mt-3">
          <input type="checkbox" />{" "}
          <p>
            Allow freelancer to log time manually if needed{" "}
            <span className="text-green-500">Learn more</span>
          </p>
        </div>
        <div className="my-4">
          <h5 className="font-bold flex items-center gap-1">
            Start Date <span className="text-gray-500">(Optional)</span>{" "}
            <FaQuestionCircle className="cursor-pointer" />
          </h5>
          <div>
            <input
              type="date"
              name=""
              id=""
              className="border-2 px-2 rounded-lg mt-1"
              value={formData.startDate}
              onChange={(e) =>
                handleFormDataChange("startDate", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractTerms;
