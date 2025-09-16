

import { Box, Typography, Button, TextField,Modal } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Masonry from '@mui/lab/Masonry';


const MaterialUI = () => {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [showImg, setShowImg] = useState(false)
    const [selecItem, setSelectItem] = useState(null)

    const getUnsplashPhotos = async () => {
        try {
            const res = await axios.get("https://api.unsplash.com/photos?page=1&per_page=30&client_id=LGb5pAoJkPl2KArxL0dimdalqE_84mySDGpIY1eqNOA")

            console.log("res====>", res.data)
            setPhotos(res.data)
            setLoading(false)

        } catch (error) {
            console.log("error===>", error)
            setLoading(false)

        }

    }

    const handlerSearchImage = async () => {
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos?&page=1&per_page=30&query=${search}&client_id=LGb5pAoJkPl2KArxL0dimdalqE_84mySDGpIY1eqNOA`)
            setPhotos(res?.data?.results)

            console.log("Search Data====>", res?.data?.results)


        } catch (error) {
            console.log("error===>", error)



        }

    }


    useEffect(() => {
        getUnsplashPhotos()
    }, [])

    const showModaImage = (item)=>{
        setSelectItem(item)
        setShowImg(true)

        
    }





    return (
        <div>

            <Box >
                <Modal
                open={showImg}
                onClose={()=>setShowImg(false)}
                sx={{display:"flex", justifyContent:"center",alignItems:"center"}}
                
            >
                <img className='w-[500px] h-[600px]'  src={selecItem?.urls?.full} alt="" />
            </Modal>


            </Box>

            
            <Box display={"flex"} justifyContent={"space-between"} bgcolor={"red"} padding={5}>

                <Typography variant='h2' sx={{ fontSize: "20px" }}>
                    learning Material UI

                </Typography>

                <Button startIcon={<AccountCircleIcon />} variant="text">Get Started</Button>

            </Box>


            <Box display={"flex"} justifyContent={"space-between"} padding={5}>
                < TextField
                    sx={{ backgroundColor: "green" }}
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}





                />
                <Button onClick={handlerSearchImage} startIcon={<AccountCircleIcon />} variant="text">Search</Button>

            </Box>


            {
                loading ?
                    <Box sx={{ display: 'flex', justifyContent: "center" }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Masonry columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
                        {photos.map((img) => (
                            <img onClick={()=>showModaImage(img)} key={img.id} src={img?.urls?.small_s3} />
                        ))}
                    </Masonry>
            }




        </div>
    )
}

export default MaterialUI