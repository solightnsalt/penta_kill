"use client";

import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT_URL;

const PENTAAPI = axios.create({
    baseURL: API_ENDPOINT,
});

// 경기일정
export const fetchMatchSchedule = async ({
    page,
    size,
    year,
    month,
}: {
    page: number;
    size: number;
    year: number;
    month: number;
}) => {
    try {
        const response = await PENTAAPI.get(`/schedules/leagues`, {
            params: { page, size, year, month },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 펜타톡
export const fetchPosts = async ({
    page,
    size,
}: {
    page: number;
    size: number;
}) => {
    try {
        const response = await PENTAAPI.get(`/posts`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 게시글 상세
export const fetchPost = async (id: number) => {
    try {
        const response = await PENTAAPI.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 댓글목록
export const fetchComments = async ({
    postId,
    page,
    size,
}: {
    postId: number;
    page: number;
    size: number;
}) => {
    try {
        const response = await PENTAAPI.get(`/posts/${postId}/comments`, {
            params: { page, size },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 대댓글목록
export const fetchReplies = async ({
    postId,
    commentId,
    page,
    size,
}: {
    postId: number;
    commentId: number;
    page: number;
    size: number;
}) => {
    try {
        const response = await PENTAAPI.get(
            `/posts/${postId}/comments/${commentId}/replies`,
            {
                params: { page, size },
            },
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
