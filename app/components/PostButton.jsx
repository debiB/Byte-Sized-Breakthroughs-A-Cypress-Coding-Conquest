'use client'

import { Button } from "@mui/material"

export default function PostButton(){

    function handleClick(){
        fetch('http://localhost:3000/examples', {method: 'POST'}).then((data) => {
            res.json().then((json) => {
                console.log({data})
            }).catch(() => {
                console.log('An error occured')
            })
        }).catch(() => {
            console.log('An error occured')
        })
    }

    return (
        <Button onClick={handleClick} data-test="post-button">
            Post Data
        </Button>
    )
}