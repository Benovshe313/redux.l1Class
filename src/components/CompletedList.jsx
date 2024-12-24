import { useSelector } from "react-redux";

function CompletedList() {
  let completedList = useSelector((state) => state.completedList.completedArray)
  //useSelector allows to read data from the Redux 
  //state is the global object in Redux that holds all the data (application's state)
  return (
    <div>
      <h1>COMPLETED LIST</h1>
      <ul>
        {completedList.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.id}: {item.todo} - COMPLETED
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompletedList;
