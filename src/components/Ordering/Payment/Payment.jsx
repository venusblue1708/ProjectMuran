import { Box, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Payment.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Box id="PaymentForm">
        <Typography className="payment_title">Привязка карты</Typography>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          name={this.state.name}
          number={this.state.number}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "15px",
          }}
        >
          <FormControl>
            <TextField
              className="payment_inp"
              type="tel"
              name="number"
              label="card-number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormControl>
          <FormControl>
            <TextField
              className="payment_inp"
              type="text"
              name="name"
              label="your-name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormControl>
          <FormControl>
            <TextField
              className="payment_inp"
              type="number"
              name="cvc"
              label="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormControl>
          <FormControl>
            <TextField
              className="payment_inp"
              type="number"
              name="expiry"
              label="expiry"
              placeholder="expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormControl>
        </Box>
      </Box>
    );
  }
}
