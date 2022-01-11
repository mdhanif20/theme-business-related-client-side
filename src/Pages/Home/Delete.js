{
    comments.map(comment=><div>
        <Card className={classes.card} sx={{p:{xs:3,md:6},mx:{xs:0,md:2},textAlign:"start",boxShadow: 1}}>
            <Box className={classes.cardBox}>
                <Box>
                  <img width="70px" src={img} alt="" />
                </Box>
                <Box sx={{ml:2}}>
                <Typography sx={{fontSize:"1.1rem",color:"#3399FF"}} variant="subtitle2" display="block" gutterBottom>
                    {comment.name}
                </Typography>
                <Typography sx={{fontSize:".9rem",opacity:".6"}} variant="body1" gutterBottom>
                 {comment.clientInfo}
                </Typography>
                </Box>
            </Box>
            <Box>
            <Typography sx={{fontSize:"1rem",fontWeight:"600",my:3}} variant="subtitle2" gutterBottom component="div">
                {comment.details}
            </Typography>
            </Box>
            <Box>
            
            <Rating
                name="simple-controlled"
                value= {comment.rating}
            />
            </Box>
        </Card>
      </div>)
}