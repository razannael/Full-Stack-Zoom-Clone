import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import MeetingCard from './MeetingCard';

const CallList = ({type}:{type: 'ended' | 'upcoming' | 'recordings'}) => {
    const {endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCalls();
    const router = useRouter();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);
    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls;
                break;
            case 'upcoming':
                return upcomingCalls;
                break;
            case 'recordings':
                return recordings;
                break;
            default:
                return [];
                break;
        }
    };
 
    const getNoCallMessage = () => {
        switch (type) {
            case 'ended':
                return 'No previous calls';
                break;
            case 'upcoming':
                return 'No upcoming calls';
                break;
            case 'recordings':
                return 'No recordings';
                break;
            default:
                return '';
                break;
        }
    };

    const calls = getCalls();
    const noCallMessage = getNoCallMessage();
    return (
    <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
         {calls && calls.length > 0 ? (
            calls.map((meeting: Call | CallRecording) => (
                <MeetingCard/>
            ))):(
                <h1>{noCallMessage}</h1>
            )
         }
    </div>
  )
}

export default CallList