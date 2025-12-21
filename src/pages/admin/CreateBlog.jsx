import { useState } from "react"
import { Aside } from "../../components/admin/Aside"
import { CreateBlogHook } from "../../Hook/admin/CreateBloghook"
import { ToastContainer } from "react-toastify"
const icon1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1765105086/Vector2_reoz9w.svg"
const uploadImage="https://res.cloudinary.com/daop3bufa/image/upload/v1765192698/upload_iax70e.svg"

export const CreateBlog =()=>{
    // Use the hook for state management
    const {
        seoTitle, setSeoTitle,
        seoCanonical, setSeoCanonical,
        seoDescription, setSeoDescription,
        seoKeywords, setSeoKeywords,
        sectionOne, setSectionOne,
        images, setImages,
        sectionTwo, setSectionTwo,
        sectionThree, setSectionThree,
        sectionFour, setSectionFour,
        sectionFive, setSectionFive,
        sectionSix, setSectionSix,
        sectionSeven, setSectionSeven,
        sectionEight, setSectionEight,
        altImageOne, setAltImageOne,
        altImageTwo, setAltImageTwo,
        altImageThree, setAltImageThree,
        data, setData,
        handleSubmit,
        handleLinkOne,
        handleLinkTwo,
        handleLinkThree,
        linkOne, setLinkOne,
        linkTwo, setLinkTwo,
        linkThree, setLinkThree,
        handlePosted,
        
    } = CreateBlogHook()

    // UI state for form controls
    const [numParagraphs, setNumParagraphs] = useState(1)
    const [numParagraphsSection3, setNumParagraphsSection3] = useState(1)
    const [numParagraphsSection4, setNumParagraphsSection4] = useState(1)
    const [numParagraphsSection5, setNumParagraphsSection5] = useState(1)
    const [numParagraphsSection6, setNumParagraphsSection6] = useState(1)
    const [numParagraphsSection7, setNumParagraphsSection7] = useState(1)
    const [numParagraphsSection8, setNumParagraphsSection8] = useState(1)
    const [sectionTwoDisplayType, setSectionTwoDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItems, setNumListItems] = useState(1)
    const [sectionThreeDisplayType, setSectionThreeDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection3, setNumListItemsSection3] = useState(1)
    const [sectionFourDisplayType, setSectionFourDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection4, setNumListItemsSection4] = useState(1)
    const [sectionFiveDisplayType, setSectionFiveDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection5, setNumListItemsSection5] = useState(1)
    const [sectionSixDisplayType, setSectionSixDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection6, setNumListItemsSection6] = useState(1)
    const [sectionSevenDisplayType, setSectionSevenDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection7, setNumListItemsSection7] = useState(1)
    const [sectionEightDisplayType, setSectionEightDisplayType] = useState('both') // 'paragraphs', 'list', or 'both'
    const [numListItemsSection8, setNumListItemsSection8] = useState(1)
  
    

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

    const updateSectionSixParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionSix.paragraphs]
        updatedParagraphs[index] = value
        setSectionSix({...sectionSix, paragraphs: updatedParagraphs})
    }

    const updateSectionSixListItems = (index, value) => {
        const updatedUl = [...sectionSix.ul]
        updatedUl[index] = value
        setSectionSix({...sectionSix, ul: updatedUl})
    }

    const updateSectionSevenParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionSeven.paragraphs]
        updatedParagraphs[index] = value
        setSectionSeven({...sectionSeven, paragraphs: updatedParagraphs})
    }

    const updateSectionSevenListItems = (index, value) => {
        const updatedUl = [...sectionSeven.ul]
        updatedUl[index] = value
        setSectionSeven({...sectionSeven, ul: updatedUl})
    }

    const updateSectionEightParagraphs = (index, value) => {
        const updatedParagraphs = [...sectionEight.paragraphs]
        updatedParagraphs[index] = value
        setSectionEight({...sectionEight, paragraphs: updatedParagraphs})
    }

    const updateSectionEightListItems = (index, value) => {
        const updatedUl = [...sectionEight.ul]
        updatedUl[index] = value
        setSectionEight({...sectionEight, ul: updatedUl})
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

        // Store file directly in images array with metadata
        const imageData = {
            file: file,
            type: imageType
        }

        if (imageType === 'main') {
            setImages([imageData, ...images])
        } else {
            setImages([...images, imageData])
        }
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

    const handleNumParagraphsSection6Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphsSection6(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsSection6Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItemsSection6(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumParagraphsSection7Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphsSection7(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsSection7Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItemsSection7(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumParagraphsSection8Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumParagraphsSection8(value > 10 ? 10 : value < 1 ? 1 : value)
    }

    const handleNumListItemsSection8Change = (e) => {
        const value = parseInt(e.target.value) || 1
        setNumListItemsSection8(value > 10 ? 10 : value < 1 ? 1 : value)
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
                        <h1 className="text-2xl font-bold text-[#FEF9D0]">Create Blog</h1>

                </div>

                <form className="mt-20" onSubmit={handleSubmit}>
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
                        <diV className ="mt-10">
                            
                            <label htmlFor="sectionOneParagraph1" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Date OF Blog</label>
                            <input
                            type="Date"
                            id="DateOfBlog"
                            name="DateOfBlog"
                            placeholder="Enter the  Date of the blog"
                            value={data}
                            onChange={(e) => (setData(e.target.value))}
                            onClick={(e) => e.target.showPicker && e.target.showPicker()}
                            className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                             />
                           
                           
                        </diV>

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

                            {/* Alt Text for Main Image */}
                            <div className="mt-4">
                              <label htmlFor="altImageOne" className="text-[#FEF9D0] font-inter text-[16px] font-semibold">Alt Text for Main Image</label>
                              <input
                                type="text"
                                id="altImageOne"
                                name="altImageOne"
                                placeholder="Enter alt text for main image..."
                                value={altImageOne}
                                onChange={(e) => setAltImageOne(e.target.value)}
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                              />
                            </div>
                          </div>
                          <div className="mt-10">
                            <label htmlFor="sectionThreeTitle" className="text-[#FEF9D0] font-inter text-[20px] font-semibold"> link One </label>
                            <input
                              type="text"
                              id="linkOne"
                              name="linkOne"
                              value={linkOne}
                              placeholder="Enter linkOne"
                              onChange={(e) => handleLinkOne(e)} 
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />  
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

                        <div className="mt-10">
                            <label htmlFor="linkTwo" className="text-[#FEF9D0] font-inter text-[20px] font-semibold"> link Two </label>
                            <input
                              type="text"
                              id="linkTwo"
                              name="linkTwo"
                              value={linkTwo}
                              placeholder="Enter linkTwo"
                              onChange={(e) => handleLinkTwo(e)} 
                              className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />  
                            
                        </div>


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

  {/* Alt Text for Left Image */}
  <div className="mt-4">
    <label htmlFor="altImageTwo" className="text-[#FEF9D0] font-inter text-[16px] font-semibold">Alt Text for Left Image</label>
    <input
      type="text"
      id="altImageTwo"
      name="altImageTwo"
      placeholder="Enter alt text for left image..."
      value={altImageTwo}
      onChange={(e) => setAltImageTwo(e.target.value)}
      className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
    />
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

      {/* Alt Text for Right Image */}
      <div className="mt-4">
        <label htmlFor="altImageThree" className="text-[#FEF9D0] font-inter text-[16px] font-semibold">Alt Text for Right Image</label>
        <input
          type="text"
          id="altImageThree"
          name="altImageThree"
          placeholder="Enter alt text for right image..."
          value={altImageThree}
          onChange={(e) => setAltImageThree(e.target.value)}
          className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
        />
      </div>
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
                            <label htmlFor="linkThree" className="text-[#FEF9D0] font-inter text-[20px] font-semibold"> link Three </label>
                            <input 
                              type="text"
                              id="linkThree"
                              name="linkThree"
                              value={linkThree}
                              placeholder="Enter linkThree"
                              onChange={(e) => handleLinkThree(e)} 
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


                      {/* section six */}
                      <section>

                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2">
                          section six
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="title6" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Title</label>
                                <input
                                    type="text"
                                    id="title6"
                                    name="title6"
                                    placeholder="Enter Title"
                                    value={sectionSix.title}
                                    onChange={(e) => setSectionSix({...sectionSix, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="headingLevel6" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="headingLevel6"
                                        name="headingLevel6"
                                        value={sectionSix.typeofH}
                                        onChange={(e) => setSectionSix({...sectionSix, typeofH: e.target.value})}
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
                          <label htmlFor="shortParagraph6" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                          <textarea
                            id="shortParagraph6"
                            name="shortParagraph6"
                            rows="5"
                            placeholder="Write a brief introduction..."
                            value={sectionSix.paragraph1}
                            onChange={(e) => setSectionSix({...sectionSix, paragraph1: e.target.value})}
                            className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                          />
                        </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionSixDisplayType"
                                        value="paragraphs"
                                        checked={sectionSixDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionSixDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionSixDisplayType"
                                        value="list"
                                        checked={sectionSixDisplayType === 'list'}
                                        onChange={(e) => setSectionSixDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionSixDisplayType"
                                        value="both"
                                        checked={sectionSixDisplayType === 'both'}
                                        onChange={(e) => setSectionSixDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionSixDisplayType === 'paragraphs' || sectionSixDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphsSection6" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphsSection6"
                                name="numParagraphsSection6"
                                min="1"
                                max="10"
                                value={numParagraphsSection6}
                                onChange={handleNumParagraphsSection6Change}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                            </div>
                        )}

                        {(sectionSixDisplayType === 'list' || sectionSixDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItemsSection6" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItemsSection6"
                                    name="numListItemsSection6"
                                    min="1"
                                    max="10"
                                    value={numListItemsSection6}
                                    onChange={handleNumListItemsSection6Change}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs for Section 6 */}
                        {(sectionSixDisplayType === 'paragraphs' || sectionSixDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphsSection6 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph6-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph6-${index + 1}`}
                                                name={`paragraph6-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionSix.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionSixParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionSixDisplayType === 'list' || sectionSixDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItemsSection6 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem6-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem6-${index + 1}`}
                                                name={`listItem6-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionSix.ul[index] || ''}
                                                onChange={(e) => updateSectionSixListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                      </section>


                      {/* section seven */}
                      <section>

                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2">
                          section seven
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="title7" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Title</label>
                                <input
                                    type="text"
                                    id="title7"
                                    name="title7"
                                    placeholder="Enter Title"
                                    value={sectionSeven.title}
                                    onChange={(e) => setSectionSeven({...sectionSeven, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="headingLevel7" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="headingLevel7"
                                        name="headingLevel7"
                                        value={sectionSeven.typeofH}
                                        onChange={(e) => setSectionSeven({...sectionSeven, typeofH: e.target.value})}
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
                          <label htmlFor="shortParagraph7" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                          <textarea
                            id="shortParagraph7"
                            name="shortParagraph7"
                            rows="5"
                            placeholder="Write a brief introduction..."
                            value={sectionSeven.paragraph1}
                            onChange={(e) => setSectionSeven({...sectionSeven, paragraph1: e.target.value})}
                            className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                          />
                        </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionSevenDisplayType"
                                        value="paragraphs"
                                        checked={sectionSevenDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionSevenDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionSevenDisplayType"
                                        value="list"
                                        checked={sectionSevenDisplayType === 'list'}
                                        onChange={(e) => setSectionSevenDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionSevenDisplayType"
                                        value="both"
                                        checked={sectionSevenDisplayType === 'both'}
                                        onChange={(e) => setSectionSevenDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionSevenDisplayType === 'paragraphs' || sectionSevenDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphsSection7" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphsSection7"
                                name="numParagraphsSection7"
                                min="1"
                                max="10"
                                value={numParagraphsSection7}
                                onChange={handleNumParagraphsSection7Change}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                            </div>
                        )}

                        {(sectionSevenDisplayType === 'list' || sectionSevenDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItemsSection7" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItemsSection7"
                                    name="numListItemsSection7"
                                    min="1"
                                    max="10"
                                    value={numListItemsSection7}
                                    onChange={handleNumListItemsSection7Change}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs for Section 7 */}
                        {(sectionSevenDisplayType === 'paragraphs' || sectionSevenDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphsSection7 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph7-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph7-${index + 1}`}
                                                name={`paragraph7-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionSeven.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionSevenParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionSevenDisplayType === 'list' || sectionSevenDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItemsSection7 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem7-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem7-${index + 1}`}
                                                name={`listItem7-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionSeven.ul[index] || ''}
                                                onChange={(e) => updateSectionSevenListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                      </section>


                      {/* section eight */}
                      <section>

                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2">
                          section eight
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 mt-10">
                            <div className="col-span-1 md:col-span-6">
                                <label htmlFor="title8" className="text-[#FEF9D0] font-inter text-[20px] font-semibold capitalize">Title</label>
                                <input
                                    type="text"
                                    id="title8"
                                    name="title8"
                                    placeholder="Enter Title"
                                    value={sectionEight.title}
                                    onChange={(e) => setSectionEight({...sectionEight, title: e.target.value})}
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <label htmlFor="headingLevel8" className="block text-[#FEF9D0] font-inter text-[20px] font-semibold ">Heading Level</label>
                                <div className="relative">
                                    <select
                                        id="headingLevel8"
                                        name="headingLevel8"
                                        value={sectionEight.typeofH}
                                        onChange={(e) => setSectionEight({...sectionEight, typeofH: e.target.value})}
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
                          <label htmlFor="shortParagraph8" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Short Paragraph</label>
                          <textarea
                            id="shortParagraph8"
                            name="shortParagraph8"
                            rows="5"
                            placeholder="Write a brief introduction..."
                            value={sectionEight.paragraph1}
                            onChange={(e) => setSectionEight({...sectionEight, paragraph1: e.target.value})}
                            className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                          />
                        </div>

                        <div className="mt-10">
                            <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Display Type</label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionEightDisplayType"
                                        value="paragraphs"
                                        checked={sectionEightDisplayType === 'paragraphs'}
                                        onChange={(e) => setSectionEightDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Paragraphs</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionEightDisplayType"
                                        value="list"
                                        checked={sectionEightDisplayType === 'list'}
                                        onChange={(e) => setSectionEightDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">List Items</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sectionEightDisplayType"
                                        value="both"
                                        checked={sectionEightDisplayType === 'both'}
                                        onChange={(e) => setSectionEightDisplayType(e.target.value)}
                                        className="mr-2 text-[#FEF9D0] focus:ring-[#FEF9D0]/20"
                                    />
                                    <span className="text-[#FEF9D0] font-inter text-[16px]">Both</span>
                                </label>
                            </div>
                        </div>

                        {(sectionEightDisplayType === 'paragraphs' || sectionEightDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numParagraphsSection8" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of Paragraphs</label>
                            <input
                                type="number"
                                id="numParagraphsSection8"
                                name="numParagraphsSection8"
                                min="1"
                                max="10"
                                value={numParagraphsSection8}
                                onChange={handleNumParagraphsSection8Change}
                                placeholder="Enter number of paragraphs"
                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                            />
                            </div>
                        )}

                        {(sectionEightDisplayType === 'list' || sectionEightDisplayType === 'both') && (
                            <div className="mt-10">
                                <label htmlFor="numListItemsSection8" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Number of List Items</label>
                                <input
                                    type="number"
                                    id="numListItemsSection8"
                                    name="numListItemsSection8"
                                    min="1"
                                    max="10"
                                    value={numListItemsSection8}
                                    onChange={handleNumListItemsSection8Change}
                                    placeholder="Enter number of list items"
                                    className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                />
                            </div>
                        )}

                        {/* Dynamic Content Inputs for Section 8 */}
                        {(sectionEightDisplayType === 'paragraphs' || sectionEightDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Paragraphs</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numParagraphsSection8 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`paragraph8-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                Paragraph {index + 1}
                                            </label>
                                            <textarea
                                                id={`paragraph8-${index + 1}`}
                                                name={`paragraph8-${index + 1}`}
                                                rows="4"
                                                placeholder={`Write paragraph ${index + 1}...`}
                                                value={sectionEight.paragraphs[index] || ''}
                                                onChange={(e) => updateSectionEightParagraphs(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(sectionEightDisplayType === 'list' || sectionEightDisplayType === 'both') && (
                            <div className="mt-10">
                                <label className="text-[#FEF9D0] font-inter text-[20px] font-semibold">List Items</label>
                                <div className="space-y-4 mt-4">
                                    {Array.from({ length: numListItemsSection8 }, (_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`listItem8-${index + 1}`} className="text-[#FEF9D0] font-inter text-[16px] font-medium">
                                                List Item {index + 1}
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem8-${index + 1}`}
                                                name={`listItem8-${index + 1}`}
                                                placeholder={`Enter list item ${index + 1}...`}
                                                value={sectionEight.ul[index] || ''}
                                                onChange={(e) => updateSectionEightListItems(index, e.target.value)}
                                                className="w-full p-3 bg-[#fef9d0]/10 rounded-md text-[#FEF9D0] placeholder:text-[#FEF9D0]/60 outline-none focus:ring-2 focus:ring-[#FEF9D0]/20"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                      </section>

                            {/* posted information */}
                      <section>
                        <p className="text-[#FEF9D0] font-inter text-[20px] font-semibold text-center mt-10 rounded-md  bg-[#2F5B44] border-2 border-[#FEF9D0]/20 border-dashed p-2">
                            posted information
                        </p>

                        <div className="flex gap-4 mt-10" >
                            <label htmlFor="posted" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Posted</label>
                            <input type="radio" name="posted" value="posted" onChange={(e) => handlePosted(e)} />
                            <label htmlFor="posted" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">unPosted</label>
                            <input type="radio" name="posted" value="unposted" onChange={(e) => handlePosted(e)} />
                            
                        </div>

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
                            <label htmlFor="seoCanonical" className="text-[#FEF9D0] font-inter text-[20px] font-semibold">Canonical URL</label>
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
                          className="px-8 py-4 bg-[#FEF9D0] text-[#2F5B44] font-bold text-lg rounded-lg hover:bg-[#fef9d0]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          Create Blog
                        </button>
                      </div>

                     
                </form>
            
                
            </div>
            <ToastContainer />
        </div>
        </>
    )
}