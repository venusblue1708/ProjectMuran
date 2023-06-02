import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { brown, pink } from "@mui/material/colors";
import "./SideBar.css";
import { useProducts } from "../../contexts/AdminContextProvider";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { fetchByParams, getProducts } = useProducts();
  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);
  return (
    <Box>
      <Grid item md={4}>
        <Paper
          sx={{
            width: "140px",
            height: "50px",
            marginTop: "20px",
            marginLeft: "10px",
            backgroundColor: "white",
            color: "#372821",
            boxShadow: "none",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Box
            className="navbar"
            sx={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <Box className="dropdown">
              <Button className="dropbtn">Виды</Button>
              <Box class="dropdown-content">
                <Grid sx={{ boxShadow: "none" }}>
                  <FormControl
                    sx={{
                      marginLeft: "8px",
                      width: "174px",
                    }}
                  >
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="all"
                      name="radio-buttons-group"
                      onChange={(e) => fetchByParams("type", e.target.value)}
                    >
                      <FormControlLabel
                        value="all"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Все"
                      />

                      <FormControlLabel
                        value="Healthy"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Healthy"
                      />
                      <FormControlLabel
                        value="Energy"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Energy"
                      />
                      <FormControlLabel
                        value="Purify"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Purify"
                      />
                      <FormControlLabel
                        value="Daily"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Daily"
                      />
                      <FormControlLabel
                        value="Balancy"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Balancy"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box className="navbar">
            <Box className="dropdown">
              <Button className="dropbtn">Цена</Button>
              <Box className="dropdown-content">
                <Grid>
                  <FormControl
                    sx={{
                      marginLeft: "8px",
                      width: "174px",
                    }}
                  >
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="all"
                      name="radio-buttons-group"
                      onChange={(e) =>
                        fetchByParams("price_lte", e.target.value)
                      }
                    >
                      <FormControlLabel
                        value="all"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="Все"
                      />

                      <FormControlLabel
                        value="1500"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="менее 1500 ₴"
                      />
                      <FormControlLabel
                        value="2000"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="менее 2000 ₴"
                      />

                      <FormControlLabel
                        value="3000"
                        control={
                          <Radio
                            sx={{
                              color: brown[100],
                              "&.Mui-checked": {
                                color: brown[200],
                              },
                            }}
                          />
                        }
                        label="менее 3000 ₴"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Grid>
            {/* <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ color: "black" }}
              >
                Виды
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
                onChange={(e) => fetchByParams("type", e.target.value)}
              >
                <FormControlLabel
                  value="all"
                  control={
                    <Radio
                      sx={{
                        color: brown[100],
                        "&.Mui-checked": {
                          color: brown[200],
                        },
                      }}
                    />
                  }
                  label="Все"
                />

                <FormControlLabel
                  value="Healthy"
                  control={
                    <Radio
                      sx={{
                        color: brown[100],
                        "&.Mui-checked": {
                          color: brown[200],
                        },
                      }}
                    />
                  }
                  label="Healthy"
                />
                <FormControlLabel
                  value="Energy"
                  control={
                    <Radio
                      sx={{
                        color: brown[100],
                        "&.Mui-checked": {
                          color: brown[200],
                        },
                      }}
                    />
                  }
                  label="Energy"
                />
                <FormControlLabel
                  value="Purify"
                  control={
                    <Radio
                      sx={{
                        color: brown[100],
                        "&.Mui-checked": {
                          color: brown[200],
                        },
                      }}
                    />
                  }
                  label="Purify"
                />
                <FormControlLabel
                  value="Daily"
                  control={
                    <Radio
                      sx={{
                        color: brown[100],
                        "&.Mui-checked": {
                          color: brown[200],
                        },
                      }}
                    />
                  }
                  label="Daily"
                />
                <FormControlLabel
                  value="Balancy"
                  control={
                    <Radio
                      sx={{
                        color: brown[100],
                        "&.Mui-checked": {
                          color: brown[200],
                        },
                      }}
                    />
                  }
                  label="Balancy"
                />
              </RadioGroup>
            </FormControl> */}
          </Grid>
          {/* <Grid>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ color: "black" }}
            >
              Цена
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={
                  <Radio
                    sx={{
                      color: brown[100],
                      "&.Mui-checked": {
                        color: brown[200],
                      },
                    }}
                  />
                }
                label="Все"
              />

              <FormControlLabel
                value="1500"
                control={
                  <Radio
                    sx={{
                      color: brown[100],
                      "&.Mui-checked": {
                        color: brown[200],
                      },
                    }}
                  />
                }
                label="менее 1500 ₴"
              />
              <FormControlLabel
                value="2000"
                control={
                  <Radio
                    sx={{
                      color: brown[100],
                      "&.Mui-checked": {
                        color: brown[200],
                      },
                    }}
                  />
                }
                label="менее 2000 ₴"
              />

              <FormControlLabel
                value="3000"
                control={
                  <Radio
                    sx={{
                      color: brown[100],
                      "&.Mui-checked": {
                        color: brown[200],
                      },
                    }}
                  />
                }
                label="менее 3000 ₴"
              />
            </RadioGroup>
          </FormControl>
        </Grid> */}
        </Paper>
      </Grid>
    </Box>
  );
};

export default SideBar;
