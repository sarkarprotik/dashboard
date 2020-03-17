import React, { useState } from "react";
import Main from './Main'

import Loading from './Loading/Loading'



function Proxy1() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  return  loading ? <Loading /> : <Main />

}

export default Proxy1