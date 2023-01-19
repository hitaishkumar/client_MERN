 
// ❌import { makeStyles } from "@mui/material/styles"; // <--- delete this ❌

// import { styled } from "@mui/system"; // <--- Add this ✅

// ❌export default makeStyles(() => ({ //  <--- delete this ❌

// export default styled(()=>({ // <--- Add this ✅

// Reason:

// The @mui/styles package is not compatible with React 18,

import { styled } from "@mui/system";

export default styled(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
}))