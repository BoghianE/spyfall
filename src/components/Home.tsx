import React, { FC } from 'react';
import Button from '@material-ui/core/Button'
import styled, { keyframes } from 'styled-components'

let categorii: string[] = ['undeva', 'aici', 'dincolo']

const Home:FC = () => {

    return (
        <div>
            <Button color='primary' variant='contained'>
                Add Category
            </Button>
            {categorii.map((item, index) => {
                return(
                    <Circle key={index}>{item}</Circle>
                )
            })}
        </div>

    );
};

export default Home

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 300px; width: 300px; opacity: 1 }
 40% { height: 305px; width: 305px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`

const Circle = styled.div`
  height: 100px;
  width: 100px;
  text-align: center;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`