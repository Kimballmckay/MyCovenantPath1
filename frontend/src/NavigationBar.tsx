import React from "react";
import styles from "./GoalsPlans.module.css";
import NavItem from "./NavItem";

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <NavItem
        label="Path"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f002116ce522b638b43e5c4de34987635921589a9f2f7354c19c3f5cb74b3213?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
      />
      <NavItem
        label="Progress"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31a01464f0168d2b4386f2d59a9cbc9088c82a9478cfc73c03c7a67346192708?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
      />
      <NavItem
        label="Goals"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/15be6936d5ee80b6bf0828801aa326bf800c811d4d6ba3964e4da1c631b42a66?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
        isActive={true}
      />
      <NavItem
        label="Study"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/de0f9ae439c533ad2971037b1890b21f02ee41efd4e42b9ab284a7e639e9ebca?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
      />
      <NavItem
        label="Menu"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ab7785cb9536970a94b2768a2045a46835b65ad2ed50994533fabf488462b39c?placeholderIfAbsent=true&apiKey=3c1836ca9e544bbe8603c758fecc6a89"
      />
    </nav>
  );
};

export default NavigationBar;
