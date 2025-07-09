import React from 'react';


function Container({children}) {
  return (
    <div className={styles.conta}>
      {children}
    </div>
  );
}

export default Container;
