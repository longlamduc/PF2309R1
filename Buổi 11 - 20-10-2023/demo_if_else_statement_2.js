let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    // lấy giá trị từ thẻ input
    let billValue = parseFloat(document.getElementById("bill-value").value);
    
    if (billValue >= 2000000) {
        alert(`Bạn đã được giảm giá ${billValue * 0.1}`);
        // cập nhật giá trị đơn hàng
        billValue *= 0.9;
    } // thao tác xử lý trong trường hợp kết quả kiếm tra là false
    else {
        alert(`Bạn đã được giảm giá ${billValue * 0.05}`);
        billValue *= 0.95;
    }

    let infoElem = document.getElementById("info");
    infoElem.innerText = `Bạn cần thanh toán ${billValue} VND`;
});