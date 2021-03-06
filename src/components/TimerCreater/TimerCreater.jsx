import { React, useState, useEffect } from 'react';

// components
import { TimerInterface } from './TimerInterface/TimerInterface';

// styles
import './TimerCreater.css';

// icon
import iconAddTimer from '../../img/icon/iconAddTimer.svg';

export const TimerCreater = (props) => {
    const [animationBtnCreateTimer, setAnimationBtnCreateTimer] = useState('')

    // trigger animation btnCreateTimer
    useEffect(() => {
        setAnimationBtnCreateTimer(props.saveLocalTime[props.typeTimer].length !== props.maxAmountTimers)

    }, [props.saveLocalTime[props.typeTimer]]) // Needed to control the animation of a certain type of timer

    //* timer creation
    const addNewTimer = () => {
        const newTimer = {
            id: props.saveLocalTime[props.typeTimer].length ? 
                props.saveLocalTime[props.typeTimer][props.saveLocalTime[props.typeTimer].length - 1].id + 1 : 0,
            savedDate: null,
            completedTime: '00:00:00',
            isActive: false,
            isFinish: false
        }
        const addNewTimerFromArray = {
            ...props.saveLocalTime, [props.typeTimer]: [
                ...props.saveLocalTime[props.typeTimer], newTimer
            ]
        }
      
        // saving the created timer to a LC
        localStorage.USER_TIME = JSON.stringify(addNewTimerFromArray)

        // saving the created timer to a hook
        props.setSaveLocalTime(() => {
            return addNewTimerFromArray
        })
    }

    return (
        <>
            <div className='TimerCreater-wrapperTimers'>
                {
                    props.saveLocalTime[props.typeTimer].length ?
                        props.saveLocalTime[props.typeTimer].map((item, i) => {
                            return (
                                <TimerInterface
                                    generalSettings={item}
                                    key={item.id}
                                    id={item.id}

                                    saveLocalTime={props.saveLocalTime}
                                    setSaveLocalTime={props.setSaveLocalTime}
                                    collectionTimes={props.collectionTimes}
                                    typeTimer={props.typeTimer}

                                    agentSoundNotify={props.agentSoundNotify}

                                    setAnimationBtnCreateTimer={setAnimationBtnCreateTimer}
                                />
                            )
                        })

                        :

                        <p className='TimerCreater-availableTimerText'>Not found</p>
                }
            </div>

            <button
                // TODO fix btn animation 
                className={`TimerCreater-btnCreateTimer ${animationBtnCreateTimer ? 
                    'btnCreateTimerAnimationCreate' 
                    : 
                    'btnCreateTimerAnimationRemove'
                }`}
                onClick={() => {
                    addNewTimer()
                }}
            >
                <img 
                    className='TimerCreater-addTimerBtnImg' 
                    src={iconAddTimer} 
                />

                <div className='TimerCreater-containerLabelAvailableTimers'>
                    <p className='TimerCreater-labelAvailableTimers'>Available:</p>
                    <p>{props.maxAmountTimers - props.saveLocalTime[props.typeTimer].length}</p>
                </div>
            </button>
        </>
    )
}