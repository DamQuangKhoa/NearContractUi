import React, {useEffect, useState} from "react";
import {Progress} from "antd";

const INTERVAL = 300;

const IntervalSpinner = (props: { onProgressSuccess: Function }) => {
    const [refreshPercent, setRefreshPercent] = useState(0);

    useEffect(() => {
        // handle fresh pool and account
        if (refreshPercent == INTERVAL) {
            setRefreshPercent(0);
            props.onProgressSuccess();
        }
    }, [refreshPercent])

    useEffect(() => {
        const intervalPercent = setInterval(() => {
            if (refreshPercent != INTERVAL) {
                setRefreshPercent(refreshPercent => refreshPercent + 1);
            }
        }, INTERVAL);

        return () => clearInterval(intervalPercent);
    }, [])

    return (
      <Progress width={20} showInfo={false} strokeWidth={18} type="circle" percent={refreshPercent} />
    )
}

export {
    IntervalSpinner
}
