const arrayPosts = [
  {
    id: 1,
    title: "LBM STS01",
    created_at: new Date("2022-03-12"),
    picture: "images_01.jpg",
    count_number: 256,
  },
  {
    id: 2,
    title: "LBM STS02",
    created_at: new Date("2022-03-16"),
    picture: "images_02.jpg",
    count_number: 753,
  },
  {
    id: 3,
    title: "LBM STS03",
    created_at: new Date("2022-03-19"),
    picture: "images_03.jpg",
    count_number: 864,
  },
  {
    id: 4,
    title: "LBM STS04",
    created_at: new Date("2022-03-17"),
    picture: "images_04.jpg",
    count_number: 642,
  },
];

arrayPosts.forEach(function (item) {
  //1. in dong thong tin co id chan
  if (item.id % 2 === 0) {
    // console.log("Bài post có id chẵn:", item.id, item);
  }

});

//2. in ra dang mang
// console.log("Thông tin bài đăng ban đầu: ", arrayPosts);

//3. tieu de va ngay dang co luot doc cao nhat
let maxValue = arrayPosts[0].count_number;
for (let i = 0; i < arrayPosts.length; i++) {
  if (arrayPosts[i].count_number > maxValue) {
    maxValue = arrayPosts[i].count_number;
  }
}

arrayPosts.forEach((item) => {
  if (item.count_number === maxValue) {
    // console.log("Thông tin bài viết có lượt xem cao nhất: ", item);
  }
});

//4. xoa bai viet co luot doc thap nhat
let minValue = arrayPosts[0].count_number;
for (let i = 0; i < arrayPosts.length; i++) {
  if (arrayPosts[i].count_number < minValue) {
    minValue = arrayPosts[i].count_number;
  }
}
arrayPosts.forEach((item) => {
  if (item.count_number === minValue) {
    arrayPosts.splice(item.id - 1, 1);
  }
});
// console.log("Mảng sau khi xóa bài viết có lượt đọc thấp nhất là: ", arrayPosts)

//5. them phan tu vao mang
arrayPosts.push(
  {
    id: 5,
    title: "LBM STS05",
    created_at: new Date("2022-03-22"),
    picture: "images_05.jpg",
    count_number: 567,
  },
  {
    id: 6,
    title: "LBM STS06",
    created_at: new Date("2022-03-25"),
    picture: "images_06.jpg",
    count_number: 476,
  }
);
arrayPosts.forEach(function (item) {
    // console.log("Thêm 2 phần từ vào mảng ta được mảng mới là: ", item);
});
