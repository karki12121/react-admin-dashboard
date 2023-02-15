import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Raise Funds" subtitle="Fill the details below" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ProjectName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ProjectName}
                name="ProjectName"
                error={!!touched.ProjectName && !!errors.ProjectName}
                helperText={touched.ProjectName && errors.ProjectName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Id}
                name="Id"
                error={!!touched.Id && !!errors.Id}
                helperText={touched.Id && errors.Id}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="AidAgency"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.AidAgency}
                name="AidAgency"
                error={!!touched.AidAgency && !!errors.AidAgency}
                helperText={touched.AidAgency && errors.AidAgency}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Goal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Goal}
                name="Goal"
                error={!!touched.Goal && !!errors.Goal}
                helperText={touched.Goal && errors.Goal}
                sx={{ gridColumn: "span 4" }}
              />
             
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="StartDate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.StartDate}
                name="StartDate"
                error={!!touched.StartDate && !!errors.StartDate}
                helperText={touched.StartDate && errors.StartDate}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="EndDate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.EndDate}
                name="EndDate"
                error={!!touched.EndDate && !!errors.EndDate}
                helperText={touched.EndDate && errors.EndDate}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Raise Funds
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



const checkoutSchema = yup.object().shape({
  ProjectName: yup.string().required("required"),
  Id: yup.string().required("required"),
  AidAgency: yup
  .string()
  .required("required"),
  Goal: yup.string().required("required"),
  StartDate: yup.date().required("required"),
  EndDate: yup.date().required("required"),
});
const initialValues = {
  ProjectName: "",
  Id: "",
  AidAgency: "",
  Goal: "",
  StartDate: "",
  EndDate: "",
};

export default Form;
