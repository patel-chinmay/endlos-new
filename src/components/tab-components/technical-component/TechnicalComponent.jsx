// import "./technical-component.css";

const TechnicalComponent = ({ tableData }) => {
  return (
    <div className=" technical-container container my-5 mx-auto pb-3 px-sm-5">
      <table className="table   ">
        <tbody className="">
          {tableData &&
            tableData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  item.color === "secondary" ? "table-upper-color" : ""
                }`}
              >
                <td
                  className={`${
                    item.type === "bold" ? "fw-bold  ps-4 " : "  ps-5"
                  } `}
                >
                  <small>{item.key}</small>
                </td>
                {item.value ? (
                  item.value.map((values, index) => (
                    <td key={index}>{values.value1}</td>
                  ))
                ) : (
                  <>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnicalComponent;
