import { useGetCalls } from '@/hooks/useGetCalls'
import { CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

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

    return (
    <div>CallList</div>
  )
}

export default CallList