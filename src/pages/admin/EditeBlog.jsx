import { useEffect, useState } from "react"
import { Aside } from "../../components/admin/Aside"
import { useParams } from "react-router-dom"
import { GetOneBlogHook } from "../../Hook/admin/GetOneBlogHook"
import { UpdateBlogHook } from "../../Hook/admin/UpdateBlogHook"
const icon1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1765105086/Vector2_reoz9w.svg"
const uploadImage="https://res.cloudinary.com/daop3bufa/image/upload/v1765192698/upload_iax70e.svg"
import { ToastContainer } from "react-toastify"



export const EditeBlog=()=>{

    const {id}=useParams();
    const [handleUpdate,loadingUpdate]=UpdateBlogHook(id);

    const [blogId, setBlogId] = useState(''); // eslint-disable-line no-unused-vars

    const [loading,blog]=GetOneBlogHook(id);

    // Populate form fields when blog data is loaded   
    useEffect(() => {
        if (blog && !loading) {
            // Set blog _id
            setBlogId(blog._id || '');

            // Set blog title

            // Set SEO information
            setSeoTitle(blog.title || '');
            setSeoCanonical(blog.canonical || '');
            setSeoDescription(blog.description || '');
            setSeoKeywords(blog.keywords || '');

            setSectionOne({
                title: blog.sectionOne?.title || '',
                paragraph1: blog.sectionOne?.paragraph1 || '',
                paragraph2: blog.sectionOne?.paragraph2 || '',
                typeOfH: blog.sectionOne?.typeOfH || 'h1'
            });
            setSectionTwo({
                title: blog.sectionTwo?.title || '',
                paragraph1: blog.sectionTwo?.paragraph1 || '',
                paragraphs: blog.sectionTwo?.paragraphs || [],
                ul: blog.sectionTwo?.ul || [],
                typeOfH: blog.sectionTwo?.typeOfH || 'h1'
            });
            setSectionThree({
                title: blog.sectionThree?.title || '',
                paragraph1: blog.sectionThree?.paragraph1 || '',
                paragraphs: blog.sectionThree?.paragraphs || [],
                ol: blog.sectionThree?.ol || [],
                typeOfH: blog.sectionThree?.typeOfH || 'h1'
            });
            setSectionFour({
                title: blog.sectionFour?.title || '', // Include title from API if exists
                paragraph1: blog.sectionFour?.paragraph1 || '',
                paragraphs: blog.sectionFour?.paragraphs || [],
                ul: blog.sectionFour?.ul || [],
                typeofH: blog.sectionFour?.typeofH || 'h1'
            });
            setSectionFive({
                title: blog.sectionFive?.title || '',
                paragraph1: blog.sectionFive?.paragraph1 || '',
                paragraphs: blog.sectionFive?.paragraphs || [],
                ul: blog.sectionFive?.ul || [],
                typeofH: blog.sectionFive?.typeofH || 'h1'
            });

            // Set dynamic content counts
            setNumParagraphs(blog.sectionTwo?.paragraphs?.length || 1);
            setNumListItems(blog.sectionTwo?.ul?.length || 1);
            setNumParagraphsSection3(blog.sectionThree?.paragraphs?.length || 1);
            setNumListItemsSection3(blog.sectionThree?.ol?.length || 1);
            setNumParagraphsSection4(blog.sectionFour?.paragraphs?.length || 1);
            setNumListItemsSection4(blog.sectionFour?.ul?.length || 1);
            setNumParagraphsSection5(blog.sectionFive?.paragraphs?.length || 1);
            setNumListItemsSection5(blog.sectionFive?.ul?.length || 1);

            // Set display types
            setSectionTwoDisplayType(
                (blog.sectionTwo?.paragraphs?.length > 0 && blog.sectionTwo?.ul?.length > 0) ? 'both' :
                (blog.sectionTwo?.paragraphs?.length > 0) ? 'paragraphs' :
                (blog.sectionTwo?.ul?.length > 0) ? 'list' : 'both'
            );
            setSectionThreeDisplayType(
                (blog.sectionThree?.paragraphs?.length > 0 && blog.sectionThree?.ol?.length > 0) ? 'both' :
                (blog.sectionThree?.paragraphs?.length > 0) ? 'paragraphs' :
                (blog.sectionThree?.ol?.length > 0) ? 'list' : 'both'
            );
            setSectionFourDisplayType(
                (blog.sectionFour?.paragraphs?.length > 0 && blog.sectionFour?.ul?.length > 0) ? 'both' :
                (blog.sectionFour?.paragraphs?.length > 0) ? 'paragraphs' :
                (blog.sectionFour?.ul?.length > 0) ? 'list' : 'both'
            );
            setSectionFiveDisplayType(
                (blog.sectionFive?.paragraphs?.length > 0 && blog.sectionFive?.ul?.length > 0) ? 'both' :
                (blog.sectionFive?.paragraphs?.length > 0) ? 'paragraphs' :
                (blog.sectionFive?.ul?.length > 0) ? 'list' : 'both'
            );

            // Set image previews if images exist based on slot numbers
            if (blog.images && blog.images.length > 0) {
                blog.images.forEach((image) => {
                    if (image.slot === 0) {
                        setMainImagePreview(image.secure_url);
                    } else if (image.slot === 1) {
                        setSectionTwoLeftImagePreview(image.secure_url);
                    } else if (image.slot === 2) {
                        setSectionTwoRightImagePreview(image.secure_url);
                    }
                });
            }
        }
    }, [blog, loading]);




     
    




    // State management for edit form
    const [seoTitle, setSeoTitle] = useState('')
    const [seoCanonical, setSeoCanonical] = useState('')
    const [seoDescription, setSeoDescription] = useState('')
    const [seoKeywords, setSeoKeywords] = useState('')
    const [sectionOne, setSectionOne] = useState({ title: '', paragraph1: '', paragraph2: '', typeOfH: 'h1' })
    const [images, setImages] = useState([])
    const [sectionTwo, setSectionTwo] = useState({ title: '', paragraph1: '', paragraphs: [], ul: [], typeOfH: 'h1' })
    const [sectionThree, setSectionThree] = useState({ title: '', paragraph1: '', paragraphs: [], ol: [], typeOfH: 'h1' })
    const [sectionFour, setSectionFour] = useState({ title: '', paragraph1: '', paragraphs: [], ul: [], typeofH: 'h1' })
    const [sectionFive, setSectionFive] = useState({ title: '', paragraph1: '', paragraphs: [], ul: [], typeofH: 'h1' })

  

    // UI state for form controls
    const [numParagraphs, setNumParagraphs] = useState(1)
    const [numParagraphsSection3, setNumParagraphsSection3] = useState(1)
    const [numParagraphsSection4, setNumParagraphsSection4] = useState(1)
    const [numParagraphsSection5, setNumParagraphsSection5] = useState(1)
    const [sectionTwoDisplayType, setSectionTwoDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItems, setNumListItems] = useState(1)
    const [sectionThreeDisplayType, setSectionThreeDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection3, setNumListItemsSection3] = useState(1)
    const [sectionFourDisplayType, setSectionFourDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection4, setNumListItemsSection4] = useState(1)
    const [sectionFiveDisplayType, setSectionFiveDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection5, setNumListItemsSection5] = useState(1)

    // Image preview states
    const [mainImagePreview, setMainImagePreview] = useState(null)
    const [sectionTwoLeftImagePreview, setSectionTwoLeftImagePreview] = useState(null)
    const [sectionTwoRightImagePreview, setSectionTwoRightImagePreview] = useState(null)


    // Helper functions to update dynamic content
    const updateSectionTwoParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionTwo.paragraphs]
        updatedParagraphs[index] = value
        setSectionTwo({...sectionTwo, paragraphs: updatedParagraphs})
    }

    const updateSectionTwoListItems = (index, value) => {
        const updatedUl = [...sectionTwo.ul]
        updatedUl[index] = value
        setSectionTwo({...sectionTwo, ul: updatedUl})
    }

    const updateSectionThreeParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionThree.paragraphs]
        updatedParagraphs[index] = value
        setSectionThree({...sectionThree, paragraphs: updatedParagraphs})
    }

    const updateSectionThreeListItems = (index, value) => {
        const updatedOl = [...sectionThree.ol]
        updatedOl[index] = value
        setSectionThree({...sectionThree, ol: updatedOl})
    }

    const updateSectionFourParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionFour.paragraphs]
        updatedParagraphs[index] = value
        setSectionFour({...sectionFour, paragraphs: updatedParagraphs})
    }

    const updateSectionFourListItems = (index, value) => {
        const updatedUl = [...sectionFour.ul]
        updatedUl[index] = value
        setSectionFour({...sectionFour, ul: updatedUl})
    }

    const updateSectionFiveParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionFive.paragraphs]
        updatedParagraphs[index] = value
        setSectionFive({...sectionFive, paragraphs: updatedParagraphs})
    }

    const updateSectionFiveListItems = (index, value) => {
        const updatedUl = [...sectionFive.ul]
        updatedUl[index] = value
        setSectionFive({...sectionFive, ul: updatedUl})
    }

    // Image upload handler
    const handleImageUpload = (e, imageType) => {
        const file = e.target.files[0]
        if (!file) return

        // Create preview URL immediately
        const previewUrl = URL.createObjectURL(file)

        // Set preview based on image type
        if (imageType === 'main') {
            setMainImagePreview(previewUrl)
        } else if (imageType === 'sectionTwoLeft') {
            setSectionTwoLeftImagePreview(previewUrl)
        } else if (imageType === 'sectionTwoRight') {
            setSectionTwoRightImagePreview(previewUrl)
        }

        // Determine the slot based on image type
        let slot;
        if (imageType === 'main') {
            slot = 0;
        } else if (imageType === 'sectionTwoLeft') {
            slot = 1;
        } else if (imageType === 'sectionTwoRight') {
            slot = 2;
        }

        // Store file directly in images array with metadata including slot
        const imageData = {
            file: file,
            type: imageType,
            slot: slot
        }

        // Remove existing image of same type if exists, then add new one
        const filteredImages = images.filter(img => img.type !== imageType)
        setImages([...filteredImages, imageData])
    }

    // Image delete handlers
    const handleDeleteImage = (imageType) => {
        if (imageType === 'main') {
            setMainImagePreview(null)
            // Remove from images array
            setImages(images.filter(img => img.type !== 'main'))
            // Clear the file input
            const fileInput = document.getElementById('mainImage')
            if (fileInput) fileInput.value = ''
        } else if (imageType === 'sectionTwoLeft') {
            setSectionTwoLeftImagePreview(null)
            setImages(images.filter(img => img.type !== 'sectionTwoLeft'))
            // Clear the file input
            const fileInput = document.getElementById('sectionTwoLeftImage')
            if (fileInput) fileInput.value = ''
        } else if (imageType === 'sectionTwoRight') {
            setSectionTwoRightImagePreview(null)
            setImages(images.filter(img => img.type !== 'sectionTwoRight'))
            // Clear the file input
            const fileInput = document.getElementById('sectionTwoRightImage')
            if (fileInput) fileInput.value = ''
        }
    }

    // Collect form data for submission
    const collectFormData = () => {
        // Create FormData to handle file uploads (always use FormData for consistency)
        const formData = new FormData()

        // Add basic blog data
        formData.append('title', seoTitle)
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

        // Add images as files with slots
        images.forEach((image) => {
            if (image.file) {
                formData.append(`images`, image.file)
                formData.append(`imageTypes`, image.type || 'main')
                formData.append(`slots`, image.slot) // Use the actual slot value for each image
            }
        })

        return formData;
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = collectFormData();
        console.log(blogData,"blogData");
        handleUpdate(blogData);
    }

    const handleNumParagraphsChange = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphs(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumParagraphsSection3Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphsSection3(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumParagraphsSection4Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphsSection4(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumParagraphsSection5Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphsSection5(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsChange = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItems(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsSection3Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItemsSection3(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsSection4Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItemsSection4(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsSection5Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItemsSection5(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    // Show loading spinner while data is loading
    if (loading) {
        return (
            <>
            <div className="grid grid-cols-1 md:grid-cols-10 w-full h-full gap-2">
                <div className="col-span-1 md:col-span-2 mb-5 ml-0 md:ml-3">
                    <Aside />
                </div>
                <div className="col-span-1 md:col-span-8 p-4 sm:p-6 md:p-10 lg:p-16 m-2 rounded-2xl bg-[#2F5B44] shadow-[0_0_30px_6px_rgba(0,0,0,0.45)] h-auto md:h-[calc(100vh-1rem)] md:overflow-y-auto scrollbar-yellow flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FEF9D0]"></div>
                        <p className="text-[#FEF9D0] text-lg font-semibold">Loading blog data...</p>
                    </div>
                </div>
            </div>
            </>
        );
    }

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-10 w-full h-full gap-2">
            <div className="col-span-1 md:col-span-2 mb-5 ml-0 md:ml-3">
                <Aside />
            </div>
            <div className="col-span-1 md:col-span-8 p-4 sm:p-6 md:p-10 lg:p-16 m-2 rounded-2xl bg-[#2F5B44] shadow-[0_0_30px_6px_rgba(0,0,0,0.45)] h-auto md:h-[calc(100vh-1rem)] md:overflow-y-auto scrollbar-yellow">

                    <div className="flex flex-row items-center justify-center gap-2">
                        <img src={icon1} alt="image" width={30} height={30} />
                        <h1 className="text-2xl font-bold text-[#FEF9D0]">Edit Blog</h1>

                </div>

                <form onSubmit={handleSubmit} className="mt-20">
                      {/* sectionOne */}
                      <section>
                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10   mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="blogTitle" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Blog Title</label>
                                <input
                                    type="text"
                                    id="blogTitle"
                                    name="blogTitle"
                                    placeholder="Enter Blog Title"
                                    value={sectionOne.title}
                                    onChange={(e) => setSectionOne({...sectionOne, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="sectionOneHeadingLevel" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Section One Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="sectionOneHeadingLevel"
                                        name="sectionOneHeadingLevel"
                                        value={sectionOne.typeOfH}
                                        onChange={(e) => setSectionOne({...sectionOne, typeOfH: e.target.value})}
                                        className="w-full p-2 mt-1 bg-[#fef9d0]/10 rounded-lg text-[#FEF9D0] outline-none focus:ring-2 focus:ring-[#FEF9D0]/30 border border-[#FEF9D0]/20 hover:bg-[#fef9d0]/15 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="h1" className="bg-[#2F5B44] text-[#FEF9D0]">h1</option>
                                        <option value="h2" className="bg-[#2F5B44] text-[#FEF9D0]">h2 </option>
                                        <option value="h3" className="bg-[#2F5B44] text-[#FEF9D0]">h3 </option>
                                        <option value="h4" className="bg-[#2F5B44] text-[#FEF9D0]">h4</option>
                                        <option value="h5" className="bg-[#2F5B44] text-[#FEF9D0]">h5</option>
                                        <option value="h6" className="bg-[#2F5B44] text-[#FEF9D0]">h6</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-10">
 
                        </div>

                      </section>

                      <section className="mt-10">
                        <div className="grid grid-cols-1">
                          <div>
                            <label htmlFor="sectionOneParagraph1" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Section One Paragraph 1</label>
                            <textarea
                              id="sectionOneParagraph1"
                              name="sectionOneParagraph1"
                              rows="5"
                              placeholder="Write section one paragraph 1..."
                              value={sectionOne.paragraph1}
                              onChange={(e) => setSectionOne({...sectionOne, paragraph1: e.target.value})}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 mt-10">
                          <div>
                            <label htmlFor="sectionOneParagraph2" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Section One Paragraph 2</label>
                            <textarea
                              id="sectionOneParagraph2"
                              name="sectionOneParagraph2"
                              rows="5"
                              placeholder="Write section one paragraph 2..."
                              value={sectionOne.paragraph2}
                              onChange={(e) => setSectionOne({...sectionOne, paragraph2: e.target.value})}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                        </div>
                      </section>

                      {/* sectionThree - Main Image */}
                      <section className="mt-10">
                        <div className="grid grid-cols-1">
                          <div>
                            <label htmlFor="mainImage" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Main Image</label>
                            <input
                              id="mainImage"
                              name="mainImage"
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, 'main')}
                              className="hidden"
                            />
                            <div className="relative">
                              {!mainImagePreview ? (
                                <label
                                  htmlFor="mainImage"
                                  className="mt-0.5 w-full h-56 border-2 border-dashed border-[#fef9d0]/20 rounded-md flex items-center justify-center text-[#FEF9D0]/60 cursor-pointer hover:border-[#FEF9D0]/30"
                                >
                                  <img src={uploadImage} alt="image" className="w-30 h-40" />
                                </label>
                              ) : (
                                <div className="relative mt-0.5 w-full h-56 border-2 border-dashed border-[#fef9d0]/20 rounded-md overflow-hidden">
                                  <img
                                    src={mainImagePreview}
                                    alt="Main image preview"
                                    className="w-full h-full object-cover"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteImage('main')}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
                                    title="Delete image"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </section>


                      {/* sectoin two */}



                      <section>
                        <h6 className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2">
                            section two
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10   mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="sectionTwoTitle" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Section Two Title</label>
                                <input
                                    type="text"
                                    id="sectionTwoTitle"
                                    name="sectionTwoTitle"
                                    placeholder="Enter Section Two Title"
                                    value={sectionTwo.title}
                                    onChange={(e) => setSectionTwo({...sectionTwo, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />


                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="sectionTwoHeadingLevel" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Section Two Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="sectionTwoHeadingLevel"
                                        name="sectionTwoHeadingLevel"
                                        value={sectionTwo.typeOfH}
                                        onChange={(e) => setSectionTwo({...sectionTwo, typeOfH: e.target.value})}
                                        className="w-full mt-1 p-2 bg-[#fef9d0]/10 rounded-lg text-[#FEF9D0] outline-none focus:ring-2 focus:ring-[#FEF9D0]/30 border border-[#FEF9D0]/20 hover:bg-[#fef9d0]/15 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="h1" className="bg-[#2F5B44] text-[#FEF9D0]">h1</option>
                                        <option value="h2" className="bg-[#2F5B44] text-[#FEF9D0]">h2 </option>
                                        <option value="h3" className="bg-[#2F5B44] text-[#FEF9D0]">h3 </option>
                                        <option value="h4" className="bg-[#2F5B44] text-[#FEF9D0]">h4</option>
                                        <option value="h5" className="bg-[#2F5B44] text-[#FEF9D0]">h5</option>
                                        <option value="h6" className="bg-[#2F5B44] text-[#FEF9D0]">h6</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="grid grid-cols-1 mt-10">
                          <div>
                            <label htmlFor="shortParagraph" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                            <textarea
                              id="shortParagraph"
                              name="shortParagraph"
                              rows="5"
                              placeholder="Write a brief introduction..."
                              value={sectionTwo.paragraph1}
                              onChange={(e) => setSectionTwo({...sectionTwo, paragraph1: e.target.value})}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                        </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionTwoDisplayType"
                                        value="paragraphs"
                                        checked={sectionTwoDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionTwoDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionTwoDisplayType"
                                        value="list"
                                        checked={sectionTwoDisplayType === 'list'}
                                        onChange={(e) => setSectionTwoDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionTwoDisplayType"
                                        value="both"
                                        checked={sectionTwoDisplayType === 'both'}
                                        onChange={(e) => setSectionTwoDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionTwoDisplayType === 'paragraphs' || sectionTwoDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphs" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphs"
                                name="numParagraphs"
                                min="1"
                                max="10"
                                value={numParagraphs}
                                onChange={handleNumParagraphsChange}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                        </div>
                        )}

                        {(sectionTwoDisplayType === 'list' || sectionTwoDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItems" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItems"
                                    name="numListItems"
                                    min="1"
                                    max="10"
                                    value={numListItems}
                                    onChange={handleNumListItemsChange}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs */}
                        {(sectionTwoDisplayType === 'paragraphs' || sectionTwoDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphs }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph-${index + 1}`}
                                                name={`paragraph-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionTwo.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionTwoParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionTwoDisplayType === 'list' || sectionTwoDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItems }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem-${index + 1}`}
                                                name={`listItem-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionTwo.ul[index] || ''}
                                                onChange={(e) => updateSectionTwoListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

<div className="grid grid-cols-1 mt-10">
  <div>
    <label htmlFor="sectionTwoLeftImage" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">left Image</label>
    <input
      id="sectionTwoLeftImage"
      name="sectionTwoLeftImage"
      type="file"
      accept="image/*"
      onChange={(e) => handleImageUpload(e, 'sectionTwoLeft')}
      className="hidden"
    />
    <div className="relative">
      {!sectionTwoLeftImagePreview ? (
        <label
          htmlFor="sectionTwoLeftImage"
          className="mt-0.5 w-full h-56 border-2 border-dashed border-[#fef9d0]/20 rounded-md flex items-center justify-center text-[#FEF9D0]/60 cursor-pointer hover:border-[#FEF9D0]/30"
        >
          <img src={uploadImage} alt="image" className="w-30 h-40" />
        </label>
      ) : (
        <div className="relative mt-0.5 w-full h-56 border-2 border-dashed border-[#fef9d0]/20 rounded-md overflow-hidden">
          <img
            src={sectionTwoLeftImagePreview}
            alt="Left image preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => handleDeleteImage('sectionTwoLeft')}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
            title="Delete image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  </div>
</div>



<div className="grid grid-cols-1 mt-10">
  <div>
    <label htmlFor="sectionTwoRightImage" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">right Image</label>
    <input
      id="sectionTwoRightImage"
      name="sectionTwoRightImage"
      type="file"
      accept="image/*"
      onChange={(e) => handleImageUpload(e, 'sectionTwoRight')}
      className="hidden"
    />
    <div className="relative">
      {!sectionTwoRightImagePreview ? (
        <label
          htmlFor="sectionTwoRightImage"
          className="mt-0.5 w-full h-56 border-2 border-dashed border-[#fef9d0]/20 rounded-md flex items-center justify-center text-[#FEF9D0]/60 cursor-pointer hover:border-[#FEF9D0]/30"
        >
          <img src={uploadImage} alt="image" className="w-30 h-40" />
        </label>
      ) : (
        <div className="relative mt-0.5 w-full h-56 border-2 border-dashed border-[#fef9d0]/20 rounded-md overflow-hidden">
          <img
            src={sectionTwoRightImagePreview}
            alt="Right image preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => handleDeleteImage('sectionTwoRight')}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
            title="Delete image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  </div>
</div>


</div>



                      </section>


                      <section>
                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2">
                          section three
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="title3" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Title</label>
                                <input
                                    type="text"
                                    id="title3"
                                    name="title3"
                                    placeholder="Enter Title"
                                    value={sectionThree.title}
                                    onChange={(e) => setSectionThree({...sectionThree, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="headingLevel3" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="headingLevel3"
                                        name="headingLevel3"
                                        value={sectionThree.typeOfH}
                                        onChange={(e) => setSectionThree({...sectionThree, typeOfH: e.target.value})}
                                        className="w-full p-2 mt-1 bg-[#fef9d0]/10 rounded-lg text-[#FEF9D0] outline-none focus:ring-2 focus:ring-[#FEF9D0]/30 border border-[#FEF9D0]/20 hover:bg-[#fef9d0]/15 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="h1" className="bg-[#2F5B44] text-[#FEF9D0]">h1</option>
                                        <option value="h2" className="bg-[#2F5B44] text-[#FEF9D0]">h2 </option>
                                        <option value="h3" className="bg-[#2F5B44] text-[#FEF9D0]">h3 </option>
                                        <option value="h4" className="bg-[#2F5B44] text-[#FEF9D0]">h4</option>
                                        <option value="h5" className="bg-[#2F5B44] text-[#FEF9D0]">h5</option>
                                        <option value="h6" className="bg-[#2F5B44] text-[#FEF9D0]">h6</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                          <label htmlFor="shortParagraph3" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                          <textarea
                            id="shortParagraph3"
                            name="shortParagraph3"
                            rows="5"
                            placeholder="Write a brief introduction..."
                            value={sectionThree.paragraph1}
                            onChange={(e) => setSectionThree({...sectionThree, paragraph1: e.target.value})}
                            className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                          />
                        </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionThreeDisplayType"
                                        value="paragraphs"
                                        checked={sectionThreeDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionThreeDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionThreeDisplayType"
                                        value="list"
                                        checked={sectionThreeDisplayType === 'list'}
                                        onChange={(e) => setSectionThreeDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionThreeDisplayType"
                                        value="both"
                                        checked={sectionThreeDisplayType === 'both'}
                                        onChange={(e) => setSectionThreeDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionThreeDisplayType === 'paragraphs' || sectionThreeDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphsSection3" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphsSection3"
                                name="numParagraphsSection3"
                                min="1"
                                max="10"
                                value={numParagraphsSection3}
                                onChange={handleNumParagraphsSection3Change}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                            </div>
                        )}

                        {(sectionThreeDisplayType === 'list' || sectionThreeDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItemsSection3" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItemsSection3"
                                    name="numListItemsSection3"
                                    min="1"
                                    max="10"
                                    value={numListItemsSection3}
                                    onChange={handleNumListItemsSection3Change}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs for Section 3 */}
                        {(sectionThreeDisplayType === 'paragraphs' || sectionThreeDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphsSection3 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph3-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph3-${index + 1}`}
                                                name={`paragraph3-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionThree.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionThreeParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionThreeDisplayType === 'list' || sectionThreeDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItemsSection3 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem3-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem3-${index + 1}`}
                                                name={`listItem3-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionThree.ol[index] || ''}
                                                onChange={(e) => updateSectionThreeListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}




                      </section>

                       {/* section four */}

                      <section>

                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2"  >
                          section four
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="title4" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Title</label>
                                <input
                                    type="text"
                                    id="title4"
                                    name="title4"
                                    placeholder="Enter Title"
                                    value={sectionFour.title}
                                    onChange={(e) => setSectionFour({...sectionFour, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="headingLevel4" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="headingLevel4"
                                        name="headingLevel4"
                                        value={sectionFour.typeofH}
                                        onChange={(e) => setSectionFour({...sectionFour, typeofH: e.target.value})}
                                        className="w-full p-2 mt-1 bg-[#fef9d0]/10 rounded-lg text-[#FEF9D0] outline-none focus:ring-2 focus:ring-[#FEF9D0]/30 border border-[#FEF9D0]/20 hover:bg-[#fef9d0]/15 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="h1" className="bg-[#2F5B44] text-[#FEF9D0]">h1</option>
                                        <option value="h2" className="bg-[#2F5B44] text-[#FEF9D0]">h2 </option>
                                        <option value="h3" className="bg-[#2F5B44] text-[#FEF9D0]">h3 </option>
                                        <option value="h4" className="bg-[#2F5B44] text-[#FEF9D0]">h4</option>
                                        <option value="h5" className="bg-[#2F5B44] text-[#FEF9D0]">h5</option>
                                        <option value="h6" className="bg-[#2F5B44] text-[#FEF9D0]">h6</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="shortParagraph4" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                            <textarea
                              id="shortParagraph4"
                              name="shortParagraph4"
                              rows="5"
                              placeholder="Write a brief introduction..."
                              value={sectionFour.paragraph1}
                              onChange={(e) => setSectionFour({...sectionFour, paragraph1: e.target.value})}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionFourDisplayType"
                                        value="paragraphs"
                                        checked={sectionFourDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionFourDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionFourDisplayType"
                                        value="list"
                                        checked={sectionFourDisplayType === 'list'}
                                        onChange={(e) => setSectionFourDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionFourDisplayType"
                                        value="both"
                                        checked={sectionFourDisplayType === 'both'}
                                        onChange={(e) => setSectionFourDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionFourDisplayType === 'paragraphs' || sectionFourDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphsSection4" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphsSection4"
                                name="numParagraphsSection4"
                                min="1"
                                max="10"
                                value={numParagraphsSection4}
                                onChange={handleNumParagraphsSection4Change}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                            </div>
                        )}

                        {(sectionFourDisplayType === 'list' || sectionFourDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItemsSection4" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItemsSection4"
                                    name="numListItemsSection4"
                                    min="1"
                                    max="10"
                                    value={numListItemsSection4}
                                    onChange={handleNumListItemsSection4Change}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs for Section 4 */}
                        {(sectionFourDisplayType === 'paragraphs' || sectionFourDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphsSection4 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph4-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph4-${index + 1}`}
                                                name={`paragraph4-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionFour.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionFourParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionFourDisplayType === 'list' || sectionFourDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItemsSection4 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem4-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem4-${index + 1}`}
                                                name={`listItem4-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionFour.ul[index] || ''}
                                                onChange={(e) => updateSectionFourListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}




                      </section>


                      {/* sectoin five  */}
                      <section>

                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2"  >
                          section five
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="title5" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Title</label>
                                <input
                                    type="text"
                                    id="title5"
                                    name="title5"
                                    placeholder="Enter Title"
                                    value={sectionFive.title}
                                    onChange={(e) => setSectionFive({...sectionFive, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="headingLevel5" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="headingLevel5"
                                        name="headingLevel5"
                                        value={sectionFive.typeofH}
                                        onChange={(e) => setSectionFive({...sectionFive, typeofH: e.target.value})}
                                        className="w-full p-2 mt-1 bg-[#fef9d0]/10 rounded-lg text-[#FEF9D0] outline-none focus:ring-2 focus:ring-[#FEF9D0]/30 border border-[#FEF9D0]/20 hover:bg-[#fef9d0]/15 transition-all duration-200 appearance-none cursor-pointer"
                                    >
                                        <option value="h1" className="bg-[#2F5B44] text-[#FEF9D0]">h1</option>
                                        <option value="h2" className="bg-[#2F5B44] text-[#FEF9D0]">h2 </option>
                                        <option value="h3" className="bg-[#2F5B44] text-[#FEF9D0]">h3 </option>
                                        <option value="h4" className="bg-[#2F5B44] text-[#FEF9D0]">h4</option>
                                        <option value="h5" className="bg-[#2F5B44] text-[#FEF9D0]">h5</option>
                                        <option value="h6" className="bg-[#2F5B44] text-[#FEF9D0]">h6</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="shortParagraph5" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                            <textarea
                              id="shortParagraph5"
                              name="shortParagraph5"
                              rows="5"
                              placeholder="Write a brief introduction..."
                              value={sectionFive.paragraph1}
                              onChange={(e) => setSectionFive({...sectionFive, paragraph1: e.target.value})}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionFiveDisplayType"
                                        value="paragraphs"
                                        checked={sectionFiveDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionFiveDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionFiveDisplayType"
                                        value="list"
                                        checked={sectionFiveDisplayType === 'list'}
                                        onChange={(e) => setSectionFiveDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionFiveDisplayType"
                                        value="both"
                                        checked={sectionFiveDisplayType === 'both'}
                                        onChange={(e) => setSectionFiveDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionFiveDisplayType === 'paragraphs' || sectionFiveDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphsSection5" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphsSection5"
                                name="numParagraphsSection5"
                                min="1"
                                max="10"
                                value={numParagraphsSection5}
                                onChange={handleNumParagraphsSection5Change}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                            </div>
                        )}

                        {(sectionFiveDisplayType === 'list' || sectionFiveDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItemsSection5" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItemsSection5"
                                    name="numListItemsSection5"
                                    min="1"
                                    max="10"
                                    value={numListItemsSection5}
                                    onChange={handleNumListItemsSection5Change}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs for Section 5 */}
                        {(sectionFiveDisplayType === 'paragraphs' || sectionFiveDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphsSection5 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph5-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph5-${index + 1}`}
                                                name={`paragraph5-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionFive.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionFiveParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionFiveDisplayType === 'list' || sectionFiveDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItemsSection5 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem5-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem5-${index + 1}`}
                                                name={`listItem5-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionFive.ul[index] || ''}
                                                onChange={(e) => updateSectionFiveListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}




                      </section>


                      {/* seo information */}

                      <section>
                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2"  >
                            seo information
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                          <div>
                            <label htmlFor="seoTitle" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">SEO Title</label>
                            <input
                              type="text"
                              id="seoTitle"
                              name="seoTitle"
                              placeholder="Enter SEO title..."
                              value={seoTitle}
                              onChange={(e) => setSeoTitle(e.target.value)}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                          <div>
                            <label htmlFor="seoCanonical" className="text-[#FEF9D0] font-inter text-[20px]">Canonical URL</label>
                            <input
                              type="text"
                              id="seoCanonical"
                              name="seoCanonical"
                              placeholder="Enter canonical URL..."
                              value={seoCanonical}
                              onChange={(e) => setSeoCanonical(e.target.value)}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 mt-10">
                          <div>
                            <label htmlFor="seoDescription" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">SEO Description</label>
                            <textarea
                              id="seoDescription"
                              name="seoDescription"
                              rows="3"
                              placeholder="Enter SEO description..."
                              value={seoDescription}
                              onChange={(e) => setSeoDescription(e.target.value)}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 mt-10">
                          <div>
                            <label htmlFor="seoKeywords" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">SEO Keywords</label>
                            <input
                              type="text"
                              id="seoKeywords"
                              name="seoKeywords"
                              placeholder="Enter keywords separated by commas..."
                              value={seoKeywords}
                              onChange={(e) => setSeoKeywords(e.target.value)}
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                          </div>
                        </div>
                      </section>

                      {/* Submit Button */}
                      <div className="flex justify-center mt-16">
                        <button
                          type="submit"
                          disabled={loadingUpdate}
                          className={`px-8 py-4 font-bold text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                            loadingUpdate
                              ? 'bg-[#fef9d0]/50 text-[#2F5B44]/50 cursor-not-allowed'
                              : 'bg-[#FEF9D0] text-[#2F5B44] hover:bg-[#fef9d0]/90'
                          }`}
                        >
                          {loadingUpdate ? 'Updating...' : 'Update Blog'}
                        </button>
                      </div>




                </form>


            </div>
            <ToastContainer />
        </div>
        </>
    )
}