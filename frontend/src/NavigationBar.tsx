import React from 'react';
import styles from './Menu.module.css';
import NavItem from './NavItem';

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navigationbar}>
      <NavItem
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f002116ce522b638b43e5c4de34987635921589a9f2f7354c19c3f5cb74b3213?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
        label="Path"
        isActive={false}
        containerClassName={styles.iconContainer}
        stateLayerClassName={styles.stateLayer2}
        navItemClassName={styles.navitem1}
      />

      <NavItem
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31a01464f0168d2b4386f2d59a9cbc9088c82a9478cfc73c03c7a67346192708?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
        label="Progress"
        isActive={false}
        containerClassName={styles.iconContainer2}
        stateLayerClassName={styles.stateLayer3}
        navItemClassName={styles.navitem2}
      />

      <NavItem
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/15be6936d5ee80b6bf0828801aa326bf800c811d4d6ba3964e4da1c631b42a66?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
        label="Goals"
        isActive={false}
        containerClassName={styles.iconContainer3}
        stateLayerClassName={styles.stateLayer4}
        navItemClassName={styles.navitem3}
      />

      <NavItem
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/de0f9ae439c533ad2971037b1890b21f02ee41efd4e42b9ab284a7e639e9ebca?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
        label="Study"
        isActive={false}
        containerClassName={styles.iconContainer4}
        stateLayerClassName={styles.stateLayer5}
        navItemClassName={styles.navitem4}
      />

      <NavItem
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ab7785cb9536970a94b2768a2045a46835b65ad2ed50994533fabf488462b39c?placeholderIfAbsent=true&apiKey=3fb7e4d952c749b1b4b816af6fe83375"
        label="Menu"
        isActive={true}
        containerClassName={styles.iconContainer5}
        stateLayerClassName={styles.stateLayer6}
        navItemClassName={styles.navitem5}
      />
    </nav>
  );
};

export default NavigationBar;
