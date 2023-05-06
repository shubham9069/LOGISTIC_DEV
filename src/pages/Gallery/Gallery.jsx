import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from '../../axios'
import Loader from '../../Loader';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Toast from '../../Toast';
import Review from '../servicepage/review/Review';



const Gallery_page = () => {
    const {HomePage,setHomePage} = useContext(AuthContext)
    const {gallery,testimonial} = HomePage;
    const [isLoading,setIsLoading]=useState(true)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    document.title="Gallery"

    const galleryfun =async () =>
    {
        try{
            setIsLoading(true)
            const response= await axios({
              method: "get",
             url:'/get_gallery',
              
              } )
             
             if(response.status===200){
              const data = response.data;
                const photo=[]
              data?.gallery?.forEach((element, index) =>{
                  var obj = {
                    src: element?.image,
                       width: 3,
                      height:  3
                  }
                  photo.push(obj);

              })
              setHomePage((p)=>({...p,["gallery"]:photo}))
              // Toast(data.message,response.status)
              
              
             }
            }
           catch(err){
            const error = err.response.data
            Toast(error.message);
            
         
         
           }
           finally{
            setIsLoading(false)
           }
         
    
    }

    useEffect(()=>{
      !gallery?.length ? galleryfun():setIsLoading(false)

    },[])
  
    const openLightbox = useCallback((event, { gallery, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

      
  const testimonialfun =async () =>
  {
      try{
          setIsLoading(true)
          const response= await axios({
            method: "get",
           url:'/get_all_reviews',
            
            } )
           
           if(response.status===200){
            const data = response.data;
            setHomePage((p)=>({...p,["testimonial"]:data?.reviews}))
            // Toast(data.message,response.status)
            
            
           }
          }
         catch(err){
          const error = err.response.data
          // Toast(error.message);
          
       
       
         }
         finally{
          setIsLoading(false)
         }
       
  
  }





  useEffect(() => {
      !testimonial?.length ? testimonialfun():setIsLoading(false)

  },[])
  return (
   <>
  {isLoading &&(<Loader/>)}
  
<div className="happy-face section-margin section-padding">
<div className="container" >
<div style={{maxWidth:'300px'}}>

<p class="section-subheading">OUR GALLERY </p>
<h2 class="section-heading ">We Have Spread Some Happiness</h2>
</div>
</div>
</div>
<Gallery photos={gallery} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={gallery.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>

      <Review reviewArr = {testimonial}/>

    
   </>
  )
}

export default Gallery_page