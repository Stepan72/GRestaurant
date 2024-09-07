"use client";
import React from "react";
import { SubHeading, MenuItem } from "@/components";
import "./SpecialMenu.scss";
import { cocktails, wines } from "@/constants/data";
import Image from "next/image";

const SpecialMenu = () => {
  return (
    <div
      className="app__specialMenu flex__center section__padding app__bg "
      id="menu"
    >
      <div className="app__specialMenu-title">
        <SubHeading
          title="Menu That Fits You Palatte"
          className="items-center"
        />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {wines.map((el, index) => {
              return (
                <MenuItem
                  key={index}
                  title={el.title}
                  price={el.price}
                  tags={el.tags}
                />
              );
            })}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <Image
            src="/assets/menu.png"
            alt="menu-img"
            width={650}
            height={1040}
          />
        </div>
        <div className="app__specialMenu-menu_coctails flex__center">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {cocktails.map((el, index) => {
              return (
                <MenuItem
                  key={index}
                  title={el.title}
                  price={el.price}
                  tags={el.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
