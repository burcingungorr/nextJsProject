"use client";
import Title from "@/components/Title/Title";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../globals.css";
import Categoris from "@/components/WorkOutComponents/Categories/Categoris";
import WorkOuts from "@/components/WorkOutComponents/WorkOuts/WorkOuts";
import { fetchCalories } from "@/redux/slices/caloriSlice";

const WorkOutPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory) {
      dispatch(
        fetchCalories({ activity: selectedCategory, weight: 70, duration: 30 })
      );
    }
  }, [dispatch, selectedCategory]);

  return (
    <div className="container">
      <Title text="Antremanlar" />
      <Categoris onSelect={setSelectedCategory} />
      <WorkOuts />
    </div>
  );
};

export default WorkOutPage;
