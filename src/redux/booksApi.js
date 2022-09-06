import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection, getDocs, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import db from '../firebase/firebase';

export const booksApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: fakeBaseQuery(),

	endpoints: (build) => ({
		getBooks: build.query({
			async queryFn() {
				try {
					const bookCollection = collection(db, 'books');
					const querySnapshot = await getDocs(bookCollection);
					let books = [];

					querySnapshot?.forEach((doc) => {
						books.push({
							id: doc.id,
							...doc.data(),
						});
					});

					return { data: books };
				}
				catch (error) {
					return { error: error };
				}
			},
		}),

		updateBook: build.mutation({
			async queryFn({id, availble, userName}) {
				try {
					const bookRef = doc(db, "books", id);

					await updateDoc(bookRef, {
						availble: availble,
						userName: userName,
					}, { merge: true })

					return { data: 'updated'}
				} catch (error) {
					return { error: error };
				}
			},
			invalidatesTags: ["book"]
		})
	}),
});

export const { useGetBooksQuery, useUpdateBookMutation } = booksApi;