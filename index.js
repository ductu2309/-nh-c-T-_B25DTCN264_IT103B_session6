let flag = false;

for (let i = 1; i <= 3; i++) {
  let account = prompt(`Nhập tên đăng nhập`);
  let password = prompt("Nhập mật khẩu");
  if (account === "admin" && password === "12345") {
    alert("Đăng nhập thành công");
    flag = true;
    break;
  } else {
    let soLanNhap = 3 - i;
    if (account !== "admin" && password !== "12345") {
      alert(`Sai tài khoản, mật khẩu!! Còn ${soLanNhap} lần nhập`);
    } else if (account !== "admin") {
      alert(`Sai tài khoản!! Còn ${soLanNhap} lần nhập`);
    } else if (password !== "12345") {
      alert(`Sai mật khẩu!! Còn ${soLanNhap} lần nhập`);
    }
    if (i == 3) {
      alert("Tài khoản đã bị khoá");
    }
  }
}

let libraries = ["Toán", "Văn", "Anh"];
let choice;
do {
  choice = +prompt(`
    ======== MENU ========
    1. Nhập thêm lô sách mới.    
    2. Hiển thị danh sách sách.  
    3. Tìm kiếm sách.            
    4. Cập nhật tên sách.        
    5. Đảo ngược thứ tự kệ sách. 
    6. Nhập kho từ nguồn khác.   
    7. Thoát chương trình.       
        `);
  switch (choice) {
    case 1:
      let newBook = prompt(
        "Nhập tên tất cả sách mới (Mỗi tên sách cách nhau bởi dấu phẩy)",
      );
      const newBookToArray = newBook.split(",");
      for (let i = 0; i < newBookToArray.length; i++) {
        let newBookName = newBookToArray[i].trim();
        if (newBookName !== "") {
          libraries.push(newBookName);
        }
      }
      alert(
        `Đã thêm thành công ${newBookToArray.length} cuốn sách vào trong kho`,
      );
      break;
    case 2:
      console.log("Danh sách hiện tại:");
      if (libraries.length === 0) {
        console.log("Trong kho không có sách");
        alert("Trong kho không có sách");
      } else {
        for (let j = 0; j < libraries.length; j++) {
          console.log(`${j + 1}. Môn ${libraries[j]}`);
        }
      }
      break;
    case 3:
      let searchBook = prompt("nhập tên sách cần tìm kiếm");
      let findBook = libraries.indexOf(searchBook);
      if (findBook !== -1) {
        alert(
          `Đã tìm thấy sách ${searchBook} trong kho tại vị trí số ${findBook}`,
        );
      } else {
        alert(`Không tìm thấy sách ${searchBook} trong kho`);
      }
      break;
    case 4:
      let bookNameUpdate = prompt("Nhập tên sách cần cập nhật:");
      let bookLocation = libraries.indexOf(bookNameUpdate);
      if (bookLocation !== -1) {
        let newBookNameUpdate = prompt("Nhập tên mới cho sách ");
        libraries[bookLocation] = newBookNameUpdate;
        alert(`Cập nhật thành công tên sách ${newBookNameUpdate}`);
      } else {
        alert(`Không tìm thấy tên sách ${bookNameUpdate} trong thu viện`);
      }

      console.log("Danh sách hiện tại:");
      for (let h = 0; h < libraries.length; h++) {
        console.log(`${h + 1}. Môn ${libraries[h]}`);
      }
      break;
    case 5:
      libraries.reverse();
      console.log("--- DANH SÁCH SAU KHI ĐẢO NGƯỢC ---");
      for (let k = 0; k < libraries.length; k++) {
        console.log(`Index ${k}: ${libraries[k]}`);
      }
      alert("Danh sách đã đảo ngược ");
      break;
    case 6:
      let libraries2 = ["Sách Kỹ Năng", "Truyện Tranh"];
      let newLibraries = libraries.concat(libraries2);
      console.log(newLibraries);
      alert("Đã gộp kho sách thành công");
      break;
    case 7:
      alert("Hẹn gặp lại!");
      break;

    default:
      alert("Lựa chọn không hợp lệ! vui lòng chọn từ 1 đến 7!!!!!");
      break;
  }
} while (choice !== 7);
