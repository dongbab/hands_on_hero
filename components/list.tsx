import Link from "next/link";

interface ListProps {
    id: number;
    title: string;
    serviceDate: Date;
    startTime: Date;
    endTime: Date;
    Cost: number; 
}

export default function List({
    id,
    title,
    serviceDate,
    startTime, 
    endTime,
    Cost, 
}: ListProps) {
    return (
        <Link href={`/services/${id}`}>
            <div className="flex space-x-3">
              <div className="flex flex-col pt-5">
                <h3 className="mb-3 text-[25px] font-bold text-black">
                  {title}
                </h3>
                <span className="text-lg text-gray-500">
                  {/* 2023년 4월 1일 오전 10시 부터 */}
                  {serviceDate}
                </span>
                <span className="text-lg text-gray-500">
                  {/* 2023년 4월 3일 오후 12시 까지 */}
                  {startTime} ~ {endTime} 
                </span>
                <span className="mt-3 text-[20px] font-medium text-gray-900">{Cost}원
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end space-x-2">
              <div className="text-5 flex items-center space-x-0.5  text-gray-600">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="text-5 flex items-center space-x-0.5  text-gray-600">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
            </div>
        </Link>
    )
}