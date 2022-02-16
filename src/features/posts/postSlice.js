import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
    posts: [
      {
        id: "1",
        title: "Nên coi du khách quốc tế như khách nội địa",
        description:
          "Nhưng mặt khác, chúng ta phải đặt trong bối cảnh nhiều nước đã mở còn Việt Nam chưa là khác thường, ảnh hưởng không tốt tới vị thế ngành du lịch. Bởi du khách đến từ nước đã quen chung sống với dịch, họ không cần thiết phải đến một nơi. Ngoài ra, nếu không mở cửa, du khách cho rằng Việt Nam chưa thể kiểm soát dịch bệnh, chưa tự tin hoặc hệ thống dịch vụ chưa sẵn sàng.",
      },
      {
        id: "2",
        title: "Messi hỏng phạt đền nhiều nhất Champions League",
        description:
          "Một trong những ký ức cay đắng nhất với Messi là khi hỏng phạt đền trước Chelsea ở bán kết Champions League 2011-2012, khiến Barca bị loại. Trước đó, tiền đạo người Argentina từng bỏ lỡ cơ hội ở trận gặp Panathinaikos năm 2010. Tháng 2/2015, khi Barca thắng Man City 2-1 ở lượt đi vòng 1/8, Messi không thể thắng Joe Hart trên chấm 11m. Pha bỏ lỡ gần nhất của Messi xảy ra khi anh bị Keylor Navas - khi đó còn khoác áo Real - từ chối ở lượt về vòng 1/8 Champions League 2020-2021.",
      },
    ],
  },
  reducers: {
    edit: (state, actions) => {
      const postCurrent = state.posts.find(
        (item) => item.id === actions.payload.id
      );
      postCurrent.title = actions.payload.title;
      postCurrent.description = actions.payload.description;
    },
    del: (state, actions) => {
      state.posts.splice(Number(actions.payload), 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { edit, del } = postSlice.actions;

export default postSlice.reducer;
