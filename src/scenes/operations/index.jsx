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
      <Header title="Mint Token" subtitle="Fill the details below" />

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
                type="number"
                label=" Token"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Token}
                name="Token"
                error={!!touched.Token && !!errors.Token}
                helperText={touched.Token && errors.Token}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="WalletAddress"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.WalletAddress}
                name="WalletAddress"
                error={!!touched.WalletAddress && !!errors.WalletAddress}
                helperText={touched.WalletAddress && errors.WalletAddress}
                sx={{ gridColumn: "span 2" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Mint
              </Button>
            </Box>
          
          </form>
        )}


        
      </Formik>
    </Box>



  );
};



const checkoutSchema = yup.object().shape({
  Token: yup.number().required("required"),
  WalletAddress: yup.string().required("required"),
  
});
const initialValues = {
  Token: "",
  WalletAddress: "",
  
};

export default Form;