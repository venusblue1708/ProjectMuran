import React from "react";
import img2 from "./image/img2.svg";
import "./Delivery.css";
import { Box, Typography } from "@mui/material";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:ital,wght@1,200&display=swap');
</style>;
const Delivery = () => {
  return (
    <Box className="delivery_box">
      <Box>
        <img
          class="delivery_img"
          style={{ marginTop: "20px" }}
          width={1450}
          src={img2}
          alt="error"
        />
      </Box>
      <Box>
        <Typography className="Nunito" sx={{ width: "60%", marginLeft: "12%" }}>
          Мы доставляем товар следущими способами
        </Typography>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "80px" }}
        >
          Курьером по Киеву
        </Typography>
        <Typography className="nunito" sx={{ width: "60%", marginLeft: "12%" }}>
          Доставка по Киеву нашей курьерской службой бесплатная, при условии,
          что стоимость покупки от 1120 грн. Если сумма вашего заказа менее 1120
          грн, то стоимость доставки составляет всего 80 грн. Перед доставкой
          наши менеджеры обязательно согласуют с вами детали доставки, а курьер
          предварительно созвонится с вами! Пожалуйста, для своевременной
          доставки курьером будьте на связи по номеру телефона, указанному при
          заказе. После доставки заказа, пожалуйста, сверьте содержимое с
          накладной в присутствии курьера. В случае, если доставленный товар не
          будет соответствовать вашему заказу, курьер заберет товар и вернет
          уплаченные за него денежные средства.
        </Typography>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "50px" }}
        >
          Доставка по Украине
        </Typography>
        <Typography className="nunito" sx={{ width: "60%", marginLeft: "12%" }}>
          Осуществляется транспортной компанией «Новая Почта» в любое отделение
          Украины. Перед отправкой наши менеджеры обязательно согласуют с вами
          детали доставки. После доставки заказа, пожалуйста, сверьте содержимое
          с накладной в присутствии сотрудника «Новой Почты».
        </Typography>
      </Box>
      <Box>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "120px" }}
        >
          Вы можете оплатить товар следующими способами
        </Typography>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "90px" }}
        >
          Онлайн оплата через сервис Liqpay
        </Typography>
        <Typography className="nunito" sx={{ width: "60%", marginLeft: "12%" }}>
          Вы можете оплатить товар онлайн при помощи банковской карты через
          сервис Liqpay
        </Typography>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "65px" }}
        >
          Наличный расчет курьеру
        </Typography>
        <Typography className="nunito" sx={{ width: "60%", marginLeft: "12%" }}>
          При доставке товара нашей курьерской службой по указанному вами адресу
          по Киеву, вы сможете оплатить заказ непосредственно в момент
          получения.
        </Typography>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "55px" }}
        >
          Наложенный платеж
        </Typography>
        <Typography
          className="Nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "55px" }}
        >
          Отправка наложенным платежом производится только при предоплате на
          услуги по доставке в размере 150грн.
        </Typography>
        <Typography
          className="nunito"
          sx={{ width: "60%", marginLeft: "12%", marginTop: "48px" }}
        >
          При заказе от 1500 грн доставка по Украине почтовой службой «Новая
          Почта» осуществляется бесплатно*. Если ваш заказ менее 1500 грн,
          доставка оплачивается согласно транспортной накладной*. *Наложенный
          платеж 20 грн. + 2% от суммы перевода (комиссия за пересылку денег
          обратно) оплачивается клиентом от любой суммы заказа.
        </Typography>
        <Typography
          className="Nunito "
          sx={{ width: "60%", marginLeft: "12%", marginTop: "85px" }}
        >
          Перевод на карту ПриватБанка или MONOBANK
        </Typography>
        <Typography className="nunito" sx={{ width: "60%", marginLeft: "12%" }}>
          Оплатить заказ вы сможете при помощи карт VISA и Mastercard
        </Typography>
      </Box>
    </Box>
  );
};

export default Delivery;
