import React from "react";

export default function Alert({alertobj}) {
    return (
    // {/* (if this part is true) && (this part will execute) */}

      alertobj &&
        <div>
    
            <div className={`alert alert-${alertobj.type}`} role="alert">
              {alertobj.message}
            </div>
           
        </div>
      );
    }