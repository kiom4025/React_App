import CourseDetails from "./CourseDetails";



function CoursePage (){

    return(
        <>
            <CourseDetails />
            <div style={{padding:'56.25% 0 0 0',position:'relative', margin:'5%'}}><iframe src="https://player.vimeo.com/video/989302587?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} title="Introduction to the course - Sample"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        </>
    )
}

export default CoursePage;