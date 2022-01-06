import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { DefaultRootState, useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";

interface Props {}

interface NewRootState extends DefaultRootState {
   counter: {
      counter: number;
      show: boolean;
   };
}

export const Home = (props: Props) => {
   const counter = useSelector((state: NewRootState) => state.counter.counter);

   console.log(counter);

   const showCounter = useSelector((state: NewRootState) => state.counter.show);
   const dispatch = useDispatch();

   const incrementHandler = () => {
      dispatch(counterActions.increment());
   };
   const decrementHandler = () => {
      dispatch(counterActions.decrement());
   };

   const increase = () => {
      dispatch(counterActions.increase(12));
   };

   const toggleCounter = () => {
      dispatch(counterActions.toggle());
   };

   return (
      <Container>
         <Typography variant="h2" textAlign="center">
            Homepage
         </Typography>
         {showCounter && <h2>-- {counter} --</h2>}
         <button onClick={incrementHandler}>Increment</button>{" "}
         <button onClick={decrementHandler}>Decrement</button>
         <button onClick={increase}>Increase</button>
         <button onClick={toggleCounter}>Toggle Counter</button>
      </Container>
   );
};

// useSelector => use this to return a slice of the store state
// useDispatch => allows us to dispatch actions to the store
