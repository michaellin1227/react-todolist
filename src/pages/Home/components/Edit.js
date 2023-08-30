import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  const [errorNote, setErrorNote] = useState("");
  const [date, setDate] = useState("");
  const [emptydate, setEmptyDate] = useState("");
  const [time, setTime] = useState("");
  const [emptytime, setEmptyTime] = useState("");


  function noteChange(e) {
    const inputnote = e.target.value;
    setNote(inputnote);

    if (inputnote.length < 3) {
      setErrorNote("請輸入至少3個字");
    } else {
      setErrorNote("");
    }
  }


  function dateChange(e) {
    setDate(e.target.value);
    if (e.target.value) {
      setEmptyDate("");
    } else {
      setEmptyDate("請選擇日期");
    }
  }

  function timeChange(e) {
    setTime(e.target.value);
    if (e.target.value) {
      setEmptyTime("");
    } else {
      setEmptyTime("請選擇時間");
    }
  }



  function addItem() {

    if (!note) {
      setErrorNote("請輸入事項");
    }

    if (!date) {
      setEmptyDate("請選擇日期");
    }
    if (!time) {
      setEmptyTime("請選擇時間");
    }

    if (note && date && time) {
      add(function (prevData) {
        return [{ id: crypto.randomUUID(), note, date, time }, ...prevData];
      })
      Swal.fire({
        icon: 'success',
        text: '新增成功！',
        confirmButtonText: '確定',
      })

      setNote("");
      setDate("");
      setTime("");
    }
  }

  // console.log(note, date, time);
  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事 :</p>
      <input type="text" value={note} placeholder='請輸入記事內容' onChange={noteChange} />
      <div className="errornote">{errorNote}</div>
      <p>日期 :</p>
      <input type="date" value={date} onChange={dateChange} />
      <div className="errornote">{emptydate}</div>
      <p>時間 :</p>
      <input type="time" value={time} onChange={timeChange} />
      <div className="errornote">{emptytime}</div>
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
