  export const renderHandler = ({ visibleStopIndex, currentPostStart, postsList, setCurrentPostStart }) => {
    if (visibleStopIndex >= currentPostStart + 10 && visibleStopIndex <= postsList.length) {
      setCurrentPostStart(prev => prev + 15)
    }
  }