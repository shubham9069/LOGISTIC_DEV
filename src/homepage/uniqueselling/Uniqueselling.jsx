import React, { useEffect } from 'react'
import { useState,useCallback ,useContext} from 'react';
import './uniqueselling.css'
import { customer,quality,premium,rating,team,rectangle,group } from '../assest'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import Toast from '../../Toast';
import { AuthContext } from '../../AuthProvider';
import axios from '../../axios';
import Loader from '../../Loader';



const Uniqueselling = () => {
  const {HomePage,setHomePage} = useContext(AuthContext)
  const {gallery} = HomePage
  const [isLoading,setIsLoading]=useState(true)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

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

    // const photos = [
    //     {
    //       src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    //       width: 3,
    //       height: 2
    //     },
    //     {
    //       src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //       width: 1,
    //       height: 1
    //     },
    //     {
    //       src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    //       width: 3,
    //       height: 4
    //     },
    //     {
    //       src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    //       width: 3,
    //       height: 4
    //     },
    //     {
    //       src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    //       width: 3,
    //       height: 4
    //     },
    //     {
    //       src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    //       width: 4,
    //       height: 3
    //     },
    //     {
    //       src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    //       width: 3,
    //       height: 4
    //     },
    //     {
    //       src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    //       width: 4,
    //       height: 3
    //     },
    //     {
    //       src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    //       width: 4,
    //       height: 3
    //     }
    //   ];
      
  return (
    <>
    {isLoading &&(<Loader/>)}
<div class="py-5 section-marginX section-padding">
    <div class="container">
        <div class="row unique-selling">

           <div class="col-sm-12 col-lg-6 width1000" style={{maxWidth: '500px' }}>
                <div class="usp-tiles  d-flex ">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={customer} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Personalized Service</h5>
                    </div> 
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={quality} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Quality Assurance</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={premium} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Premium Service</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={rating} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Experience</h5>
                    </div>
                </div>

                <div class="usp-tiles mt-3 d-flex">
                    <div class="usp-icon d-flex align-items-center justify-content-center me-3">
                        <img src={team} alt="" class="img-fluid"/>
                    </div>
                    <div class="usp-heading d-flex align-items-center">
                        <h5>Worldwide Network</h5>
                    </div>
                </div>
           </div>

           <div class="col-sm-12 col-lg-6">
                <p class="section-subheading">OUR UNIQUE SELLING PROPOSITION</p>
                <h2 class="section-heading ">Your Business Success Built On A Powerful Customer Experience Platform</h2>
                <img src={rectangle} alt="" class="img-fluid"/>
           </div>
        </div>
    </div>
</div>

{/* {happy face } */}
<div className="happy-face section-margin section-padding">
<div className="container" >
<div style={{maxWidth:'300px'}}>

<p class="section-subheading">HAPPY FACES </p>
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
    </>
  )
}

export default Uniqueselling