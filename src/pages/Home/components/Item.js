import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem() {

    Swal.fire({
      icon: 'warning',
      title: '確定要刪除事項？',
      customClass: {
        container: 'my-sweetalert-container',
        title: 'my-sweetalert-title',
        confirmButton: 'my-sweetalert-confirm-button',
        cancelButton: 'my-sweetalert-cancel-button',
      },
      showCancelButton: true,
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(function (prev) {
          return prev.filter((item) => item.id !== id);
        });
        Swal.fire({
          icon: 'success',
          title: '刪除成功！',
          confirmButtonText: '確定',
        })
      }
    })

  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
