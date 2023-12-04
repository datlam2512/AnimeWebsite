import React from "react";
import "./News.css";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";
import { useState, useContext } from "react";
import { ThemeContext } from "./TnemeContext";
export default function News() {
  const [films, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div
      className="news"
      style={
        !dark
          ? { backgroundColor: "rgb(236, 236, 236)" }
          : { backgroundColor: "gray" }
      }
    >
      <Row>
        <Col m={6} s={12}>
          <Card
            className="card-news"
            style={
              !dark
                ? { backgroundColor: "#fff" }
                : { backgroundColor: "rgb(197, 191, 191)" }
            }
            header={<img src="/filmsimg/newsimg.webp" alt="" />}
            title={<h1>Sự hồi sinh toàn cầu của văn hóa Nhật</h1>}
          >
            <p>
              <p>
                Một ví dụ tiêu biểu có thể kể đến là Ghost in the Shell - một
                thương hiệu truyền thông về khoa học viễn tưởng Nhật Bản dựa
                trên bộ truyện tranh cùng tên của tác giả Masamune Shirow. Nhà
                sản xuất Tetsu Fujimura vốn là một cựu binh dày dạn kinh nghiệm
                của ngành truyền thông Nhật Bản đã mất cả thập kỷ để đưa nó đến
                được với Hollywood.
              </p>
              <p>
                Fujimura đã thành lập Công ty Filosophia vào năm 2006 để giao
                dịch môi giới với các chủ sở hữu tác phẩm tại Nhật và các hãng
                phim ở Mỹ. Bộ truyện tranh kinh điển nói trên là tác phẩm đầu
                tiên trong danh sách săn đón của ông.
              </p>
              <p>
                Trong sứ mệnh “xây dựng cầu nối” giữa ngành công nghiệp điện ảnh
                Mỹ và nền kinh doanh giải trí khổng lồ của Nhật Bản, Fujimura đã
                phải đối mặt với nhiều vấn đề đau đầu khác nhau.{" "}
              </p>
              <p>
                Chỉ riêng việc đại diện các đối tác Mỹ đảm bảo các quyền từ Nhà
                xuất bản Kodansha đã mất 3 năm, kêu gọi đầu tư 110 triệu đôla
                trước khi bắt đầu quay tốn thêm 5 năm nữa. “Vào thời điểm đó,
                tôi không chắc liệu mô hình kinh doanh này có thể hoạt động hay
                không” - Fujimura nói.
              </p>
              <p>
                Điều ông nhanh chóng nhận ra là các hãng phim ở Mỹ và các nhà
                xuất bản Nhật Bản suy nghĩ rất khác nhau về các sản phẩm của họ.
                Hollywood đã quen với việc có mối quan hệ giao dịch tương đối
                đơn giản với các chủ sở hữu khác. Các nhà sản xuất Mỹ sẽ yêu cầu
                các nhà xuất bản Nhật cho danh sách các tài sản trí tuệ có sẵn
                của họ và đáp lại là sự ngạc nhiên sửng sốt từ phía Nhật. Ông
                giải thích: “Các nhà xuất bản Nhật sẽ nói 'Không, chúng tôi
                không bán khoai tây hay mặt hàng nhu yếu phẩm. Chúng tôi đang
                bán bản quyền của manga được viết bởi các tác giả quan trọng
                nhất'”.
              </p>
              <p>
                Ghost in the Shell cuối cùng cũng được Hãng Paramount Pictures
                phát hành vào năm 2017, dù gây tranh cãi khi chọn diễn viên
                người Mỹ Scarlett Johansson trong vai chính.
              </p>
              <p>
                Trong những năm qua, sự thỏa thuận giữa Hollywood và Nhật Bản đã
                trở nên gấp rút hơn. Phần thứ ba của Godzilla dự kiến phát hành
                vào năm tới. Bộ phim Sonic the Hedgehog dựa trên nhân vật hàng
                đầu của Sega được Paramount Pictures phát hành vào tháng 2, thu
                về hơn 300 triệu đôla trên toàn thế giới. Sony Pictures sẽ phát
                hành Monster Hunter vào tháng 9, sử dụng các nhân vật từ nhượng
                quyền trò chơi video của Capcom.
              </p>
              <p>
                Phần tiếp theo của Thám tử Pikachu chiếu năm 2019 đang được sản
                xuất.
              </p>
              <p>
                Nintendo đã đăng ký với Universal Pictures để sản xuất bộ phim
                Mario Brothers với công nghệ hình ảnh do máy tính tạo ra dự kiến
                phát hành vào năm 2022 với hi vọng có thể xóa tan ký ức về thảm
                họa Super Mario Bros năm 1993.
              </p>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
