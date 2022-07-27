import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "@mui/material/Button";

import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";

import profileImage from "./img/rectangle11610.png";
import "./style/register.css";
import { flexbox } from "@mui/system";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Register = () => {
  const [value, setValue] = React.useState(null);

  const [gender, setGender] = React.useState("");
  const [role, setRole] = React.useState("");

  //for select
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const roleHandleChange = (event) => {
    setRole(event.target.value);
  };

  //formik

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    birthday: Yup.string().required("birthday name required"),
    gender: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("gender required"),
    phoneNumber: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Contact number required"),
    possportSeries: Yup.string().required("possport series name required"),
    role: Yup.string().required("role required"),
    numberCars: Yup.string().required("numberCars required"),

    aboutInfo: Yup.string().required("aboutInfo  required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      gender: "",
      phoneNumber: "",
      possportSeries: "",
      role: "",
      numberCars: "",
      aboutInfo: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      //navigate("/dashboard", { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Box className="page-body">
      <Box
        className="frame-register"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box className="frame-img" sx={{ marginRight: "70px" }}>
          <div className="profile-img">
            <img src={profileImage} alt="img" />
          </div>
          <div className="profile-text">Изменить фото</div>
        </Box>
        <Box mt={4}>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Firstname
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Enter firstname"
                  variant="outlined"
                  sx={{ width: 450 }}
                  {...getFieldProps("firstName")}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Surname
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Enter surname"
                  variant="outlined"
                  sx={{ width: 450 }}
                  {...getFieldProps("lastName")}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Birthday
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=" Enter birthday"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ width: 450 }}
                        {...getFieldProps("birthday")}
                        error={Boolean(touched.birthday && errors.birthday)}
                        helperText={touched.birthday && errors.birthday}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Gender
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="gender"
                  onChange={handleChange}
                  sx={{ width: 450 }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  {...getFieldProps("gender")}
                  error={Boolean(touched.gender && errors.gender)}
                  helperText={touched.gender && errors.gender}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Contact number
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Enter contact number"
                  variant="outlined"
                  sx={{ width: 370 }}
                  {...getFieldProps("phoneNumber")}
                  error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
                <Button
                  variant="outlined"
                  sx={{
                    height: "56px",
                    width: "56px",
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  +
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Email
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Enter email"
                  variant="outlined"
                  sx={{ width: 450 }}
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Password
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  sx={{ width: 450 }}
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Confirm Password
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  sx={{ width: 450 }}
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Possport Series
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Posport series"
                  sx={{ width: 450 }}
                  {...getFieldProps("possportSeries")}
                  error={Boolean(
                    touched.possportSeries && errors.possportSeries
                  )}
                  helperText={touched.possportSeries && errors.possportSeries}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Skills Set
                </Typography>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 450 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Checkboxes"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Role
                </Typography>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={roleHandleChange}
                    sx={{ width: 450 }}
                    {...getFieldProps("role")}
                    error={Boolean(touched.role && errors.role)}
                    helperText={touched.role && errors.role}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  Number of Cars
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Enter  number"
                  variant="outlined"
                  sx={{ width: 370 }}
                  {...getFieldProps("numberCars")}
                  error={Boolean(touched.numberCars && errors.numberCars)}
                  helperText={touched.numberCars && errors.numberCars}
                />
                <Button
                  variant="outlined"
                  sx={{
                    height: "56px",
                    width: "56px",
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  +
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="body1" gutterBottom mr={6}>
                  About info
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="write about yourself"
                  sx={{ width: 450, color: "red" }}
                  {...getFieldProps("aboutInfo")}
                  error={Boolean(touched.aboutInfo && errors.aboutInfo)}
                  helperText={touched.aboutInfo && errors.aboutInfo}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ margin: "10px", width: "144px", height: "44px" }}
                  onClick={() => formik.resetForm()}
                  type="reset"
                  text="clear all"
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  sx={{ margin: "10px", width: "144px", height: "44px" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Form>
          </FormikProvider>
        </Box>
      </Box>
    </Box>
  );
};
const top100Films = [
  { title: "ios" },
  { title: "android" },
  { title: "web" },
  { title: "dekstop" },
];
export default Register;
