import * as yup from "yup"
export const homeFormSchema=yup.object().shape({
    housesize:yup.string("").required("Do not leave field empty") ,
    prize:yup.number("").positive("Invalid amount").required("Required"),
    location:yup.string("").required("Do not leave field empty") ,
    description:yup.string("").required("Do not leave field empty") ,
    imageUrl:yup.string("").required("Do not leave field empty") ,
})