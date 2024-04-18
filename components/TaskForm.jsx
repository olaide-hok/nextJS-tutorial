'use client';

import {useFormState} from 'react-dom';
import {useEffect, useRef} from 'react';
import {createTask} from '@/utils/actions';

const TaskForm = () => {
    const ref = useRef(null);
    const [formState, action] = useFormState(createTask.bind(null));

    useEffect(() => {
        if (formState?.success) {
            ref.current?.reset();
        }
    }, [formState]);

    return (
        <form action={action} ref={ref}>
            <div className="join w-full">
                <input
                    className="input input-bordered join-item w-full"
                    placeholder="Type Here"
                    type="text"
                    name="content"
                    required
                />
                <button type="submit" className="btn join-item btn-primary">
                    create task
                </button>
            </div>
        </form>
    );
};
export default TaskForm;
