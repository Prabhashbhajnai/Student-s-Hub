import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// redux action
import { postQuestion } from '../../Redux/Reducer/Forum/forum.action';

export default function QuestionModal({ isOpen, setIsOpen, ...props }) {

    function closeModal() {
        setIsOpen(false)
    }

    const [questionData, setQuestionData] = useState({
        questionSubject: "",
        questionText: ""
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    const handleChange = (e) =>
        setQuestionData(prev => ({ ...prev, [e.target.id]: e.target.value }));

    const submit = () => {
        dispatch(
            postQuestion({
                ...questionData,
                forums: id,
            })
        );
        setQuestionData({
            questionSubject: "",
            questionText: ""
        });
        closeModal();
        window.setTimeout(function () {
            window.location.reload()
        }, 1000);
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Question
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form className="flex flex-col gap-4">
                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="subject">Question</label>
                                            <input
                                                type="text"
                                                id="questionSubject"
                                                placeholder="How is the college?"
                                                value={questionData.questionSubject}
                                                onChange={handleChange}
                                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-2">
                                            <label htmlFor="subject">Describe your question</label>
                                            <textarea
                                                id="questionText"
                                                placeholder="Description"
                                                rows="10"
                                                value={questionData.questionText}
                                                onChange={handleChange}
                                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={submit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}