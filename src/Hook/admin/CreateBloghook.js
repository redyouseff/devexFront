import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createBlog } from "../../redux/Actions/BlogsActions"

export const CreateBlogHook = () => {
    // SEO fields
    const [seoTitle, setSeoTitle] = useState('')
    const [seoCanonical, setSeoCanonical] = useState('')
    const [seoDescription, setSeoDescription] = useState('')
    const [seoKeywords, setSeoKeywords] = useState('')
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.AllBlogs.createBlog);
    const [loading,setLoading]=useState(false);

    // Section One
    const [sectionOne, setSectionOne] = useState({
        typeOfH: 'h2',
        title: '',
        paragraph1: '',
        paragraph2: ''
    })

    // Images
    const [images, setImages] = useState([])

    // Section Two
    const [sectionTwo, setSectionTwo] = useState({
        typeOfH: 'h2',
        title: '',
        paragraph1: '',
        ul: [],
        paragraphs: []
    })

    // Section Three
    const [sectionThree, setSectionThree] = useState({
        typeOfH: 'h2',
        title: '',
        paragraph1: '',
        ol: [], // Note: schema uses ol for sectionThree
        paragraphs: []
    })

    // Section Four
    const [sectionFour, setSectionFour] = useState({
        typeofH: 'h2', // Note: schema uses typeofH (lowercase f)
        paragraph1: '',
        ul: [],
        paragraphs: []
    })

    // Section Five
    const [sectionFive, setSectionFive] = useState({
        typeofH: 'h2', // Note: schema uses typeofH (lowercase f)
        title: '',
        paragraph1: '',
        ul: [],
        paragraphs: []
    })

    // Main blog fields
    const [blogTitle, setBlogTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Create FormData to handle file uploads
        const formData = new FormData()

        // Add basic blog data
        formData.append('title', blogTitle)
        formData.append('description', seoDescription)
        formData.append('keywords', seoKeywords)
        formData.append('canonical', seoCanonical)

        // Add section data as objects (not JSON strings)
        formData.append('sectionOne[typeOfH]', sectionOne.typeOfH)
        formData.append('sectionOne[title]', sectionOne.title)
        formData.append('sectionOne[paragraph1]', sectionOne.paragraph1)
        formData.append('sectionOne[paragraph2]', sectionOne.paragraph2)

        formData.append('sectionTwo[typeOfH]', sectionTwo.typeOfH)
        formData.append('sectionTwo[title]', sectionTwo.title)
        formData.append('sectionTwo[paragraph1]', sectionTwo.paragraph1)

        // Add ul array items for sectionTwo
        sectionTwo.ul.forEach((item, index) => {
            formData.append(`sectionTwo[ul][${index}]`, item)
        })

        // Add paragraphs array items for sectionTwo
        sectionTwo.paragraphs.forEach((item, index) => {
            formData.append(`sectionTwo[paragraphs][${index}]`, item)
        })

        formData.append('sectionThree[typeOfH]', sectionThree.typeOfH)
        formData.append('sectionThree[title]', sectionThree.title)
        formData.append('sectionThree[paragraph1]', sectionThree.paragraph1)

        // Add ol array items for sectionThree
        sectionThree.ol.forEach((item, index) => {
            formData.append(`sectionThree[ol][${index}]`, item)
        })

        // Add paragraphs array items for sectionThree
        sectionThree.paragraphs.forEach((item, index) => {
            formData.append(`sectionThree[paragraphs][${index}]`, item)
        })

        formData.append('sectionFour[typeofH]', sectionFour.typeofH)
        formData.append('sectionFour[paragraph1]', sectionFour.paragraph1)

        // Add ul array items for sectionFour
        sectionFour.ul.forEach((item, index) => {
            formData.append(`sectionFour[ul][${index}]`, item)
        })

        // Add paragraphs array items for sectionFour
        sectionFour.paragraphs.forEach((item, index) => {
            formData.append(`sectionFour[paragraphs][${index}]`, item)
        })

        formData.append('sectionFive[typeofH]', sectionFive.typeofH)
        formData.append('sectionFive[title]', sectionFive.title)
        formData.append('sectionFive[paragraph1]', sectionFive.paragraph1)

        // Add ul array items for sectionFive
        sectionFive.ul.forEach((item, index) => {
            formData.append(`sectionFive[ul][${index}]`, item)
        })

        // Add paragraphs array items for sectionFive
        sectionFive.paragraphs.forEach((item, index) => {
            formData.append(`sectionFive[paragraphs][${index}]`, item)
        })

        // Add images as files
        images.forEach((image, index) => {
            if (image.file) {
                formData.append(`images`, image.file)
                formData.append(`imageTypes`, image.type || 'main')
            }
        })

        setLoading(true);
        dispatch(createBlog(formData));


    }

    useEffect(()=>{
        if(res){
            setLoading(false);
            if(res.data){
                console.log(res,"res");
            }
        }
    },[res]);

    return {
        // SEO states
        seoTitle, setSeoTitle,
        seoCanonical, setSeoCanonical,
        seoDescription, setSeoDescription,
        seoKeywords, setSeoKeywords,

        // Section states
        sectionOne, setSectionOne,
        images, setImages,
        sectionTwo, setSectionTwo,
        sectionThree, setSectionThree,
        sectionFour, setSectionFour,
        sectionFive, setSectionFive,

        // Main blog title
        blogTitle, setBlogTitle,

        // Loading state
        loading,

        // Submit handler
        handleSubmit
    }
}
