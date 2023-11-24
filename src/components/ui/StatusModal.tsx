import React, { useEffect, useState } from "react";
import Modal from "../layouts/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUserPosts } from "../../utils/api";
import { X } from "lucide-react";
import Loading from "../layouts/Loading";

export default function StatusModal() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [status, setStatus] = useState<any>();
  useEffect(() => {
    setLoading(true);
    getSingleUserPosts(`${id}`).then((res) => {
      setStatus(res.status);
      setLoading(false);
    });
  }, []);
  if (loading) return <Loading />;

  return (
    <Modal>
      <X
        className="text-white ml-[400px] cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <video className="w-[400px] h-[600px]" autoPlay>
        {status?.map((item: any) => (
          <source src={item?.status} />
        ))}
      </video>
    </Modal>
  );
}
